import { useEffect } from "react";
import TextTitle from "../custom/TextTitle";
import { MdOutlineHistory } from "react-icons/md";
import CardHistory from "../custom/CardHistory";
import { TypeDataDream } from "@/utils/types";
import AOS from "aos";
import { FaFileAlt } from "react-icons/fa";

type DJHistoryProps = {
  dataDreams: TypeDataDream[];
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDream: React.Dispatch<React.SetStateAction<TypeDataDream | null>>;
};

function DJHistory({
  dataDreams,
  setShowModal,
  setSelectedDream,
}: DJHistoryProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  const calculateDelay = (index: number) => 50 + index * 100;

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="flex justify-center mt-16 mb-5 lg:mb-10"
      >
        <TextTitle>
          <MdOutlineHistory className="inline mr-5" />
          History Interpretation <span className="text-mainColor">Dreams</span>
        </TextTitle>
      </div>
      <div className="w-full p-2 flex gap-3 justify-center flex-wrap mb-5 lg:mb-16">
        {dataDreams.length > 0 ? (
          dataDreams.map((item, index) => (
            <CardHistory
              handleClick={() => {
                setSelectedDream(item);
                setShowModal(true);
              }}
              delay={calculateDelay(index)}
              key={item.id}
              {...item}
            />
          ))
        ) : (
          <div
            className="flex gap-3 items-center"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <FaFileAlt className="text-slate-200" />
            <p className="text-center text-lg m-auto text-slate-200 capitalize">
              Data isn't yet available
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default DJHistory;
