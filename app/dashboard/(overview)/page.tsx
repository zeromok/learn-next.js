import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import {lusitana, pretendardFontFamily} from '@/app/ui/fonts';
// import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data'; // remove fetchRevenue
import {Suspense} from 'react';
import {CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton} from '@/app/ui/skeletons';

export default async function Page() {
    // const revenue = await fetchRevenue() // delete this line
    // const latestInvoices = await fetchLatestInvoices();
    // const {
    //     numberOfInvoices,
    //     numberOfCustomers,
    //     totalPaidInvoices,
    //     totalPendingInvoices,
    // } = await fetchCardData();

    return (
        <main>
            <h1 style={{ fontFamily: pretendardFontFamily, fontWeight: 'bold' }} className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                대시보드
            </h1>
            <div style={{ fontFamily: pretendardFontFamily }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
                {/*<Card title="이용 금액" value={totalPaidInvoices} type="collected" />*/}
                {/*<Card title="발송 대기" value={totalPendingInvoices} type="pending" />*/}
                {/*<Card title="총 발송 건수" value={numberOfInvoices} type="invoices" />*/}
                {/*<Card*/}
                {/*    title="이용기관 목록"*/}
                {/*    value={numberOfCustomers}*/}
                {/*    type="customers"*/}
                {/*/>*/}
            </div>
            <div style={{ fontFamily: pretendardFontFamily }} className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/*<RevenueChart revenue={revenue}  />*/}
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
                {/*<LatestInvoices latestInvoices={latestInvoices} />*/}
            </div>
        </main>
    );
}