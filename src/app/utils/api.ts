export const getExplore = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    const exploreData = await res.json();
    return exploreData;
  } catch (error) {
    console.log(error);
  }
};



export const getLive=async()=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
        const liveData = await res.json();
        return liveData;
      } catch (error) {
        console.log(error);
      }
}
export const getSearchData=async()=>{
  try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
      const SearchData = await res.json();
      return SearchData;
    } catch (error) {
      console.log(error);
    }
}