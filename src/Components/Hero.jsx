import bg1 from '../Assets/bg1.png';
import kid from '../Assets/kid.png';

const Hero = () => {
    return (
        <section className="w-[100vw] h-[100vh] bg-[#EBFAFE] relative overflow-hidden">
            <img
                className="w-[100vw] h-[200px] absolute top-0 left-0 z-0"
                alt="bgShape"
                src={bg1}
            />
            <div className="z-10 relative">
                <p className="text-black text-center mt-5 text-[12px] font-medium tracking-[10px]">
                    Shima Swim Academy
                </p>
                <p className="text-[100px] text-[#FF006B] text-center">شنا</p>
                <p className="text-[100px] text-[#6286CD] text-center -mt-24">
                    خصوصی
                </p>
                <img
                    className="absolute -z-10 right-0 left-0 mx-auto md:h-[400px]"
                    alt="kid"
                    src={kid}
                />
                <p className="text-[50px] text-center text-white mt-[100px]">
                    برای کودکان
                </p>
                <p className="text-[15px] text-center text-white ">
                    سنین 3 ماه تا 12 سال
                </p>
                <p className="text-[15px] text-center text-white ">
                    حتی با زبان انگلیسی برای دلبند دو زبانه‌ی شما{' '}
                </p>
                <div className="border border-white border-dashed w-[300px] mx-auto mt-2"></div>
                <p className="text-[35px] font-bold mt-4 text-center text-white ">
                    در استخر منزل شما{' '}
                </p>
                <div className=" w-full h-[50px] bg-[#EBFAFE] text-[#45D2FF] text-center mx-auto pt-2 text-[25px]  ">
                    جلسه اول رایگان
                </div>
                <div className=" bg-[#7AC4EC] h-[400px] w-[full] md:max-w-[442px] mx-auto ">
                    {' '}
                    <div className="h-5"></div>
                    <p className="text-white text-center text-[15px] font-medium mt-2">
                        برای اطلاعات بیشتر لطفا تماس بگیرید
                    </p>
                    <p className="text-white text-center text-[25px] font-bold mt-2">
                        09120135341 {' '}
                    </p>
                    <p className="text-white text-center text-[15px] font-medium -mt-2 ">
                       شیما ندیمی{' '}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
