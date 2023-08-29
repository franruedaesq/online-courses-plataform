'use client';

import AulaCard from './AulaCards';
import { Database } from '@/types_db';
import { postData } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe-client';
import { Box, Button, useMediaQuery } from '@mui/material';
import { Session, User } from '@supabase/supabase-js';
import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AulaCardVertical from './AulaCardVertical';
import { supabaseAdmin } from '@/utils/supabase-admin';
import { fetchCourses } from '@/utils/api/courses';
import { Course } from '@/utils/types/courses';

type Subscription = Database['public']['Tables']['subscriptions']['Row'];
type Product = Database['public']['Tables']['products']['Row'];
type Price = Database['public']['Tables']['prices']['Row'];
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  session: Session | null;
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
}

type BillingInterval = 'lifetime' | 'year' | 'month';

export default function Pricing({
  session,
  user,
  products,
  subscription
}: Props) {
  const matches = useMediaQuery('(max-width:768px)');

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function loadData() {
      const fetchedCourses: Course[] = await fetchCourses();
      setCourses(fetchedCourses);
    }

    loadData();
  }, []);


  const intervals = Array.from(
    new Set(
      products.flatMap((product) =>
        product?.prices?.map((price) => price?.interval)
      )
    )
  );
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      return router.push('/signin');
    }
    if (subscription) {
      return router.push('/account');
    }
    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session',
        data: { price }
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };

  return (
    <section className="bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-8">
        <p className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
          Aprende a modelar con <span className="text-pink-500">Procelana fría.</span>
        </p>
        <Button size="large" color="secondary" variant='outlined' sx={{ color: 'rgb(236, 72, 153)' }}>
          EXPLORA LAS AULAS VIRTUALES
        </Button>
      </div>
      <Box
        maxWidth="72rem"
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        m="0 auto"
        p={3}
        gap="16px"
        justifyContent={matches ? 'center' : 'flex-start'}
      >
        {courses && courses.map(course => (<AulaCardVertical
          imageUrl={course.thumbnail}
          title={course.title}
          price={course.price }
          description={course.description}
          url={course.name}
          key={course.id}
          courseId={course.id}
        />))}
        {/* <VideoCardVertical
          imageUrl="/caroline2.jpg"
          title="Caroline"
          price="40"
          description="En éste curso te voy a enseñar a crear una muñeca totalmente posicionable!Modelaremos varias expresiones y confeccionaremos 3 vestuarios diferentes para que puedas jugar con la ambientación en tus fotos."
          url="caroline"
        />
        <VideoCardVertical
          imageUrl="/jasmin.webp"
          title="Jasmin"
          price="40"
          description="Aprenderás a trabajar con Porcelana fria: Tallado y estructura adecuada- Modelado de rostro y manos femeninas. Y principalmente todas mis técnicas para forrar y lograr un trabajo SUPER PROLIJO ✨"
          url="jasmin"
        />
        <VideoCardVertical
          imageUrl="/mafalda.webp"
          title="Mafalda"
          price="40"
          description="Vamos a modelara en 20cm, usaremos telgopor pero tampoco tanto, asi que no se asusten!Esta todo explicado de cero y como le repito a mis alumnas CUALQUIERA PUEDE APRENDER!"
          url="mafalda"
        />
        <VideoCardVertical
          imageUrl="/dragones.webp"
          title="Dragones"
          price="40"
          description="En mi nueva Aula virtual te enseñaré a modelar a éstos 5 personajes de un forma rápida y sencilla."
          url="dragones"
        /> */}
      </Box>
    </section>
  );
}
