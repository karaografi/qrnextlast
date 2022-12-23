import { useRouter } from "next/router";
import { DashLayout } from "./";

const TeamPlayersPage = () => {
  const router = useRouter();
  const { context } = router.query;
  return (
    <section>
      <h3>{context} players</h3>
    </section>
  );
};

TeamPlayersPage.getLayout = DashLayout;

export default TeamPlayersPage;
