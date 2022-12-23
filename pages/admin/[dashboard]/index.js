import { useRouter } from "next/router";
import Link from "next/link";
import { DashboardLayout } from "../index";
import nestLayout from "../../../utils/nestLayout";
import { useEffect } from "react";
import { Container } from "@mui/system";

const DashPage = () => {
  const router = useRouter();
  const { context } = router.query;
  return (
    <section>
      <h3>{context}</h3>
    </section>
  );
};

const NestedLayout = ({children}) =>{
    useEffect(() => {
        console.log("TeamPageLayout mounted");
        return () => console.log("TeamPageLayout unmounted");
      }, []);
    
      const router = useRouter();
      const { context } = router.query;

      return(
        <Container>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href={`/admin/${context}`}>About</Link>
                        </li>
                        <li>
                            <Link href={`/admin/${context}/players`}>Player</Link>
                        </li>
                        <li>
                            <Link href={`/admin/${context}/fixtures`}>fixtures</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section>{children}</section>
        </Container>
      )
}


const getLayout = (page) => <NestedLayout>{page}</NestedLayout>;

export const DashLayout = nestLayout(DashboardLayout, getLayout);

DashPage.getLayout = DashLayout;

export default DashPage;