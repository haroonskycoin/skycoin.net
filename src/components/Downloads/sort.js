import { isMobile } from 'react-device-detect';


const sortByMobile = list => list.sort((a, b) => {
  if (a.mobile === b.mobile) return 0;
  if (isMobile) return a.isMobile ? 1 : -1;
  return a.isMobile ? -1 : 1;
});
export default sortByMobile;
