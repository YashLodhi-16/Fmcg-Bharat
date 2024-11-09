import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "@/lib/db/mongoDB";
import ProductSchema from "@/models/products.model";

export async function GET(request: NextRequest) {
  connectToDatabase();
  try {
    const { searchParams } = request.nextUrl;
    const pipeline = [];
    if (searchParams.has("all")) {
      // pipeline.push({
      //   $group: {
      //     _id: {
      //       mainCategory: "$mainCategory",
      //       subCategory: "$subCategory",
      //       underCategory: "$underCategory",
      //     },
      //     count: { $sum: 1 }, // Optional: Count how many times this combination appears
      //   },
      // });
      // //

      // pipeline.push({
      //   $match: {
      //     count: { $gt: 0 }, // This line is optional; it ensures that only existing groups are returned
      //   },
      // });
      // //

      // pipeline.push({
      //   $project: {
      //     _id: 0, // Remove the _id field from the result
      //     mainCategory: "$_id.mainCategory",
      //     subCategory: "$_id.subCategory",
      //     underCategory: "$_id.underCategory",
      //   },
      // });

      // const pipeline = [
      //   {
      //     $group: {
      //       _id: {
      //         mainCategory: "$mainCategory",
      //         subCategory: "$subCategory",
      //       },
      //       underCategories: { $addToSet: "$underCategory" }, // Collect underCategory values into an array
      //     },
      //   },
      //   {
      //     $group: {
      //       _id: "$_id.mainCategory",
      //       subCategories: {
      //         $push: {
      //           subCategory: "$_id.subCategory",
      //           underCategories: "$underCategories", // Attach the underCategory data
      //         },
      //       },
      //     },
      //   },
      //   {
      //     $addFields: {
      //       subCategories: {
      //         $map: {
      //           input: "$subCategories",
      //           as: "subCategory",
      //           in: {
      //             k: "$$subCategory.subCategory",
      //             v: {
      //               $cond: {
      //                 if: {
      //                   $gt: [{ $size: "$$subCategory.underCategories" }, 0],
      //                 },
      //                 then: "$$subCategory.underCategories", // If underCategories exist, include them
      //                 else: [], // Otherwise, leave empty array
      //               },
      //             },
      //           },
      //         },
      //       },
      //     },
      //   },
      //   {
      //     $addFields: {
      //       subCategories: {
      //         $arrayToObject: {
      //           $filter: {
      //             input: "$subCategories",
      //             as: "subCategory",
      //             cond: { $ne: ["$$subCategory.v", []] }, // Keep only subCategories with undercategories
      //           },
      //         },
      //       },
      //       noCategories: {
      //         $map: {
      //           input: "$subCategories",
      //           as: "subCategory",
      //           in: {
      //             $cond: {
      //               if: { $eq: ["$$subCategory.v", []] }, // If no underCategories
      //               then: "$$subCategory.k", // Add subCategory name to noCategories
      //               else: null, // Otherwise, don't add it
      //             },
      //           },
      //         },
      //       },
      //     },
      //   },
      //   {
      //     $project: {
      //       _id: 0,
      //       mainCategory: "$_id",
      //       subCategories: 1,
      //       noCategories: {
      //         $cond: {
      //           if: { $eq: [{ $size: "$noCategories" }, 0] },
      //           then: "$$REMOVE", // Remove the field if it's empty
      //           else: {
      //             $filter: {
      //               input: "$noCategories",
      //               as: "item",
      //               cond: { $ne: ["$$item", null] },
      //             },
      //           },
      //         },
      //       },
      //     },
      //   },
      // ];

      // const pipeline = [
      //   {
      //     $group: {
      //       _id: {
      //         mainCategory: "$mainCategory",
      //         subCategory: "$subCategory",
      //       },
      //       underCategories: { $addToSet: "$underCategory" }, // Collect underCategory values into an array
      //     },
      //   },
      //   {
      //     $group: {
      //       _id: "$_id.mainCategory",
      //       subCategories: {
      //         $push: {
      //           subCategory: "$_id.subCategory",
      //           underCategories: "$underCategories", // Attach the underCategory data
      //         },
      //       },
      //     },
      //   },
      //   {
      //     $addFields: {
      //       subCategories: {
      //         $map: {
      //           input: "$subCategories",
      //           as: "subCategory",
      //           in: {
      //             k: "$$subCategory.subCategory",
      //             v: {
      //               $cond: {
      //                 if: {
      //                   $gt: [{ $size: "$$subCategory.underCategories" }, 0],
      //                 },
      //                 then: "$$subCategory.underCategories", // If underCategories exist, include them
      //                 else: [], // Otherwise, leave empty array
      //               },
      //             },
      //           },
      //         },
      //       },
      //     },
      //   },
      //   {
      //     $addFields: {
      //       subCategories: {
      //         $arrayToObject: {
      //           $filter: {
      //             input: "$subCategories",
      //             as: "subCategory",
      //             cond: { $ne: ["$$subCategory.v", []] }, // Keep only subCategories with undercategories
      //           },
      //         },
      //       },
      //       noCategories: {
      //         $map: {
      //           input: "$subCategories",
      //           as: "subCategory",
      //           in: {
      //             $cond: {
      //               if: { $eq: ["$$subCategory.v", []] }, // If no underCategories
      //               then: "$$subCategory.k", // Add subCategory name to noCategories
      //               else: null, // Otherwise, don't add it
      //             },
      //           },
      //         },
      //       },
      //     },
      //   },
      //   {
      //     $project: {
      //       _id: 0,
      //       mainCategory: "$_id",
      //       subCategories: 1,
      //       noCategories: {
      //         $cond: {
      //           if: { $eq: [{ $size: "$noCategories" }, 0] },
      //           then: { $literal: null }, // Set it to null if it's empty
      //           else: {
      //             $filter: {
      //               input: "$noCategories",
      //               as: "item",
      //               cond: { $ne: ["$$item", null] },
      //             },
      //           },
      //         },
      //       },
      //     },
      //   },
      //   {
      //     $project: {
      //       noCategories: {
      //         $cond: {
      //           if: { $eq: [{ $size: "$noCategories" }, 0] },
      //           then: "$$REMOVE", // Remove the field if it's empty
      //           else: "$noCategories",
      //         },
      //       },
      //       mainCategory: 1,
      //       subCategories: 1,
      //     },
      //   },
      // ];

      const pipeline = [
        {
          $group: {
            _id: {
              mainCategory: "$mainCategory",
              subCategory: "$subCategory",
            },
            underCategories: { $addToSet: "$underCategory" },
          },
        },
        {
          $group: {
            _id: "$_id.mainCategory",
            subCategories: {
              $push: {
                subCategory: "$_id.subCategory",
                underCategories: "$underCategories",
              },
            },
          },
        },
        {
          $addFields: {
            subCategories: {
              $map: {
                input: "$subCategories",
                as: "subCategory",
                in: {
                  k: "$$subCategory.subCategory",
                  v: {
                    $cond: {
                      if: {
                        $gt: [{ $size: "$$subCategory.underCategories" }, 0],
                      },
                      then: "$$subCategory.underCategories",
                      else: [],
                    },
                  },
                },
              },
            },
          },
        },
        {
          $addFields: {
            subCategory: {
              $arrayToObject: {
                $filter: {
                  input: "$subCategories",
                  as: "subCategory",
                  cond: { $ne: ["$$subCategory.v", []] },
                },
              },
            },
            noCategories: {
              $map: {
                input: "$subCategories",
                as: "subCategory",
                in: {
                  $cond: {
                    if: { $eq: ["$$subCategory.v", []] },
                    then: "$$subCategory.k",
                    else: null,
                  },
                },
              },
            },
          },
        },
        {
          $project: {
            _id: 0,
            mainCategory: "$_id",
            subCategory: 1,
            noCategories: {
              $cond: {
                if: { $eq: [{ $size: "$noCategories" }, 0] },
                then: { $literal: null },
                else: {
                  $filter: {
                    input: "$noCategories",
                    as: "item",
                    cond: { $ne: ["$$item", null] },
                  },
                },
              },
            },
          },
        },
        {
          $project: {
            noCategories: {
              $cond: {
                if: { $eq: [{ $size: "$noCategories" }, 0] },
                then: "$$REMOVE",
                else: "$noCategories",
              },
            },
            mainCategory: 1,
            subCategory: 1,
          },
        },
        {
          $group: {
            _id: null,
            products: {
              $push: {
                mainCategory: "$mainCategory",
                subCategory: "$subCategory",
                noCategories: "$noCategories",
              },
            },
          },
        },
        {
          $replaceRoot: {
            newRoot: {
              $arrayToObject: {
                $map: {
                  input: "$products",
                  as: "product",
                  in: {
                    k: "$$product.mainCategory",
                    v: {
                      subCategory: "$$product.subCategory",
                      noCategories: "$$product.noCategories",
                    },
                  },
                },
              },
            },
          },
        },
      ];

      // Run the pipeline
      const [result] = await ProductSchema.aggregate(pipeline);
      return NextResponse.json({ products: result }, { status: 200 });
    }
    if (searchParams.has("mainCategory")) {
      pipeline.push({
        $match: {
          mainCategory: searchParams.get("mainCategory"),
        },
      });
      if (searchParams.has("subCategory")) {
        pipeline.push({
          $match: {
            subCategory: searchParams.get("subCategory"),
          },
        });
        if (searchParams.has("underCategory")) {
          pipeline.push({
            $match: {
              underCategory: searchParams.get("underCategory"),
            },
          });
        }
      }
    }
    pipeline.push({
      $limit: parseInt(searchParams.get("limit") || "10"),
    });
    const products = await ProductSchema.aggregate(pipeline);
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.log("Internal Server Error, 500:- " + error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
