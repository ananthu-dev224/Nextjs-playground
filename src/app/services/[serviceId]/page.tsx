import { Metadata } from "next";

type DynamicPageProps =  {
  params: {
    serviceId: string;
  };
}

export const generateMetadata = ({params} : DynamicPageProps) : Metadata=> {
     return {
        title: `Service ${params.serviceId}`
     }
};

export default function ServiceList({ params }: DynamicPageProps) {
  const { serviceId } = params;
  return (
    <div className="text-center mt-5">
      <h1>Showing service : {serviceId}</h1>
    </div>
  );
}
