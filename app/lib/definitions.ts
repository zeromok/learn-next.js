// 이 파일에는 데이터에 대한 유형 정의가 포함되어 있습니다.
// 데이터의 모양과 각 속성이 수용해야 하는 데이터 유형을 설명합니다.
// 교육의 단순성을 위해 이러한 유형을 수동으로 정의하고 있습니다.
// 그러나 이러한 유형은 Prisma와 같은 ORM을 사용하는 경우 자동으로 생성됩니다.
export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Customer = {
    id: string;
    name: string;
    email: string;
    image_url: string;
};

export type Invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    // TypeScript에서 이것을 문자열 결합 유형이라고 합니다.
    // "상태" 속성은 '유료' 또는 '유료' 두 가지 문자열 중 하나일 수 있습니다.
    status: "pending" | "paid";
};

export type Revenue = {
    month: string;
    revenue: number;
};

export type LatestInvoice = {
    id: string;
    name: string;
    image_url: string;
    email: string;
    amount: string;
};

// 데이터베이스는 금액에 대한 숫자를 반환하지만 나중에 형식 Currency 함수를 사용하여 문자열로 포맷합니다
export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
    amount: number;
};

export type InvoicesTable = {
    id: string;
    customer_id: string;
    name: string;
    email: string;
    image_url: string;
    date: string;
    amount: number;
    status: "pending" | "paid";
};

export type CustomersTableType = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: number;
    total_paid: number;
};

export type FormattedCustomersTable = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: string;
    total_paid: string;
};

export type CustomerField = {
    id: string;
    name: string;
};

export type InvoiceForm = {
    id: string;
    customer_id: string;
    amount: number;
    status: "pending" | "paid";
};
