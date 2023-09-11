
"use client";
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
import { FacebookButton } from './FacebookButton';

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

interface PricingProps {
  session: Session | null;
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
  courses: Course[];
}

type BillingInterval = 'lifetime' | 'year' | 'month';

export default function Pricing({
  session,
  user,
  products,
  subscription,
  courses,
}: PricingProps) {
  // const matches = useMediaQuery('(max-width:768px)');
  return (
    <section className="bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-8">
        <p className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
          Aprende a modelar con <span className="text-pink-500">Porcelana fría.</span>
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
        // justifyContent={matches ? 'center' : 'flex-start'}
        sx={{
          justifyContent: 'flex-start',
          '@media (max-width: 768px)': {
            justifyContent: 'center',
          }
        }}
      >
        {courses && courses.map(course => (<AulaCardVertical
          imageUrl={course.thumbnail}
          title={course.title}
          price={course.price }
          description={course.description}
          url={course.name}
          key={course.id}
          courseId={course.id}
          videos={course.courseVideos}
        />))}
      </Box>
    </section>
  );
}
