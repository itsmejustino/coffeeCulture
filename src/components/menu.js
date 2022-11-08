
import menuPhoto from '../assets/nathan-dumlao-pMW4jzELQCw-unsplash.jpg'
import SubMenu from '../components/subMenu'

export default function Menu() {
  return (
    <div
        className="bg-cover w-100 h-screen bg-center"
        style={{
          backgroundRepeat: "no-repeat",
          // width: "100%",
          // height: "80vh",
          backgroundImage: `url(${menuPhoto})`,
        }}
      >
      <div className='flex justify-center  h-screen p-3'>
      <SubMenu className='flex align-items h-96'/>
      </div>

      </div>
  );
}
