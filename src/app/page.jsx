import Users from "@/src/components/Users";
const page = () => {
  return (
    // server component 
<section>
      <h1>Hello World - Inicio</h1>
      {/* client component */}
      <Users />
    </section>
  );
};

export default page;
