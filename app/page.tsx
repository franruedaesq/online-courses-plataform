import Pricing from '@/components/Pricing';
import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import { fetchCourses } from '@/utils/api/courses';
import { getCoursesAndVideos } from './courses-server';

export default async function PricingPage() {
  const [session, products, subscription, courses] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription(),
    getCoursesAndVideos()
  ]);

  return (
    <Pricing
      session={session}
      user={session?.user}
      products={products}
      subscription={subscription}
      courses={courses? courses : []}
    />
  );
}
