import Image from "next/image";
import PatientForm from '../components/forms/PatientForm';
import Link from "next/link";
import { PasskeyModal } from "@/components/PasskeyModal";


export default function Home({searchParams}: SearchParamProps) {

  const isAdmin = searchParams.admin === 'true'

  return (
    <div className="flex h-screen max-h-screen">

    {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image src="/assets/icons/logo-full.svg" height={1000} width={1000} alt="patient" 
            className="mb-10 h-7 w-fit"/>

          <PatientForm />
          
          <div className="text-12-regular mt-20 flex justify-between">
             <p className="justify-items-end text-dark-600 xl:text-left">
             © 2024 SARMAN
             </p>
             
             <Link href="/?admin=true" className="text-green-500 text-16-regular">
               Admin
             </Link>
          </div>
        </div>
      </section>
      <Image src="/assets/images/onboarding-img.jpg" alt="patient" height={1000} width={1000}
      className="side-img max-w-[50%]"/>
    </div>
  );
}
