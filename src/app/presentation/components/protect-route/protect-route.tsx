import react from 'react'
import { type RouteProps } from 'react-router-dom'

// import { AppRoutes } from '~/app/presentation/common/constants/general'
// import { useAuth } from "~/app/presentation/hooks";

type Props = RouteProps & {
  private: boolean
  Layout: react.ElementType
}

const ProtectRoute = ({
  // private: isPrivate,
  Layout,
  element
}: // ...props
Props) => {
  // const { isAuthenticated } = useAuth();
  // if (element) return <Navigate to={AppRoutes?.home?.path!} />;
  // if (isPrivate) {
  //   return (
  //     <Layout>
  //       {isAuthenticated ? (
  //         <Layout>{element}</Layout>
  //       ) : (
  //         <Navigate to={AppRoutes?.home?.path!} />
  //       )}
  //     </Layout>
  //   );
  // }

  return <Layout>{element}</Layout>
}

export default react.memo(ProtectRoute)
