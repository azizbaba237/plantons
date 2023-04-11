import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    avatar: yup.mixed().required("You need to provide a file"),
    name: yup.string().min(2).required(),
    price: yup.number().positive().required(),
    description: yup.string(),
    category: yup.string().required(),
  })
  .required();

function AddProductModal({ visible, onClose }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addPlant = async (data) => {
    const formData = new FormData();
    formData.append("avatar", data.avatar[0]);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("category", data.category);
    await axios.post("http://localhost:8000", formData);
    console.log(data);
  };

  if (!visible) return null;

  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="sm:flex sm:items-start flex justify-center items-center">
                <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg font-medium text-center leading-6 mt-4">
                    ADD PRODUCT
                  </h3>
                  <div className="flex flex-col">
                    <form
                      encType="multipart/form-data"
                      onSubmit={handleSubmit(addPlant)}
                      className="mb-6 px-4 py-3 sm:flex  sm:px-6 flex flex-col"
                    >
                      <div className="space-y-2">
                        {/* Image field */}
                        <div className="flex flex-col">
                          <label htmlFor="file">Image</label>
                          <input
                            type="file"
                            autoComplete="none"
                            {...register("avatar", { required: true })}
                            className=" rounded border-black px-4 mb-4"
                          />
                          {errors.avatar && (
                            <span className="text-red-500">
                              This field is required
                            </span>
                          )}
                        </div>

                        {/* Product Name field */}
                        <div className="flex flex-col">
                          <label htmlFor="name">Product Name</label>
                          <input
                            type="text"
                            autoComplete="none"
                            {...register("name", { required: true })}
                            className="border-2 rounded border-black px-4 "
                            placeholder="Enter product name"
                          />
                          {errors.name && (
                            <span className="text-red-500">
                              This field is required
                            </span>
                          )}
                        </div>

                        {/* price field */}
                        <div className="flex flex-col">
                          <label htmlFor="price">Price</label>
                          <input
                            type="number"
                            autoComplete="none"
                            {...register("price", { required: true })}
                            placeholder="Enter product price"
                            className="border-2 rounded border-black px-4 "
                          />
                          {errors.price && (
                            <span className="text-red-500">
                              This field is required
                            </span>
                          )}
                        </div>

                        {/* Description field */}
                        <div className="flex flex-col">
                          <label htmlFor="price">Description</label>
                          <textarea
                            placeholder="Description"
                            autoComplete="none"
                            {...register("description", { required: true })}
                            className="border-2 rounded border-black px-4 "
                          />
                          {errors.description && (
                            <span className="text-red-500">
                              This field is required
                            </span>
                          )}
                        </div>

                        {/* Categories field */}
                        <div className=" flex flex-col justify-center items-center">
                          <label htmlFor="category" className="mr-4">
                            Choose a Categoy:
                          </label>
                          <select
                            id="category"
                            autoComplete="none"
                            {...register("category", { required: true })}
                            rows="4"
                            cols="50"
                            className="border-2 rounded px-2"
                          >
                            <option value="">---</option>
                            <option value="classique">Classique</option>
                            <option value="exterieur">Exterieur</option>
                            <option value="Plante grasse">Plante grasse</option>
                          </select>
                          {errors.category && (
                            <span className="text-red-500">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Button Add and Cancel */}
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                          Add
                        </button>
                        <button
                          className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={onClose}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductModal;
