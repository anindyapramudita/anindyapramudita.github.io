import { useRouter } from "next/router";

const useHashFragment = () => {
  const router = useRouter();
  const hashFragment = router.asPath.split("#")[1];

  return { hashFragment };
};

export default useHashFragment;
