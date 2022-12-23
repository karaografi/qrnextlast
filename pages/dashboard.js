import { useSession , getSession} from "next-auth/react";

function Dashboard() {
   const { data: session } = useSession()
    return (
       <div>
       <h1>
        Dashboard Route
       </h1>
       </div>
    )
  }


  Dashboard.auth = true
  export default Dashboard;