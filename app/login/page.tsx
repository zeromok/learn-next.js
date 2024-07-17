import LoginForm from '@/app/ui/login-form';
import Image from "next/image";

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-center rounded-lg bg-gray-100 p-3 md:h-36">
                            <div className="w-full h-full text-white flex justify-center items-center">
                                {/*<AcmeLogo />*/}
                                <Image src={"/모바일엔트로피-remove.png"}  width={400} height={400}   alt={"test"} />
                            </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}