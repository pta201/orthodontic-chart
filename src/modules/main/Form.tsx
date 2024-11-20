import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { OrthodonticDTO, OrthodonticScheme } from "./scheme";

interface Props {
  onSubmit: (data: OrthodonticDTO) => void;
}

export const Form = ({ onSubmit }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<OrthodonticDTO>({
    resolver: zodResolver(OrthodonticScheme),
  });

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold capitalize">Create chart form </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 relative mb-4">
          <label className="text-md" htmlFor="cooperate-percentage">
            Cooperate percentage:
          </label>
          <input
            // id="cooperate-percentage"
            type="number"
            placeholder="Input a number"
            min={0}
            max={100}
            className="p-1 border border-gray-300 rounded"
            {...register("cooperate")}
          />
          {errors?.cooperate && (
            <div className="absolute bottom-0 translate-y-full text-red-600 text-sm left-0">
              {errors.cooperate.message}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 relative mb-4">
          <label className="text-md" htmlFor="incooperate-percentage">
            Incooperate percentage:
          </label>
          <input
            // id="incooperate-percentage"
            type="number"
            placeholder="Input a number"
            min={0}
            max={100}
            className="p-1 border border-gray-300 rounded"
            {...register("incooperate")}
          />
          {errors?.incooperate && (
            <div className="absolute bottom-0 translate-y-full text-red-600 text-sm left-0">
              {errors.incooperate.message}
            </div>
          )}
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Create chart
        </button>
      </form>
    </div>
  );
};
