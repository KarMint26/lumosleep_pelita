import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TypeDataDream } from "@/utils/types";
import { FaTrashAlt } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";
function Alert({
  setDataDreams,
}: {
  setDataDreams: React.Dispatch<React.SetStateAction<TypeDataDream[]>>;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);
  const handleRemoveData = () => {
    localStorage.removeItem("history");
    setDataDreams([]);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="flex justify-center items-center gap-2 text-[0.85rem] sm:text-base lg:text-[1.1rem] font-semibold rounded-full px-4 sm:px-5 py-2 border-2 mx-auto bg-mainColor text-white border-secondaryColor"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <FaTrashAlt /> Clear All History
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your all
            history dream.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleRemoveData}>
            Yes I’m sure
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Alert;
