'use strict';
// /** @type {import('sequelize-cli').Migration} */

const demoProductImages = [
  // cotton balls
  {
    productId: 1,
    url: "https://target.scene7.com/is/image/Target/GUEST_f1e4a4d9-17f1-494e-968f-c10d16d10e7b?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 1,
    url: "https://target.scene7.com/is/image/Target/GUEST_88486ab7-b156-47a8-84e3-77a502a9b151?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 1,
    url: "https://target.scene7.com/is/image/Target/GUEST_30931cf7-91e5-4fcf-b54e-66b5b4983515?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // kleenex
  {
    productId: 2,
    url: "https://target.scene7.com/is/image/Target/GUEST_f9fbc7ae-b3dc-4e87-8814-62e602d61226?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 2,
    url: "https://target.scene7.com/is/image/Target/GUEST_4e938f1c-2997-452d-8d6a-960321878f74?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 2,
    url: "https://target.scene7.com/is/image/Target/GUEST_38aaac79-a7b2-49e8-9a2f-0892bdfb953d?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 2,
    url: "https://target.scene7.com/is/image/Target/GUEST_f2412a2a-1b7c-4730-ba86-5100cc900020?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // toothpaste
  {
    productId: 3,
    url: "https://target.scene7.com/is/image/Target/GUEST_0e422303-42d3-4e6c-b267-b98687c85bee?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 3,
    url: "https://target.scene7.com/is/image/Target/GUEST_44219ab8-48aa-4f45-9c47-481033ebba22?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 3,
    url: "https://target.scene7.com/is/image/Target/GUEST_5f4bf78e-c709-4782-9c20-da6d5fe2934f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 3,
    url: "https://target.scene7.com/is/image/Target/GUEST_aa1e1aef-866e-413b-ad9a-a1187bae08e9?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 3,
    url: "https://target.scene7.com/is/image/Target/GUEST_e6dd5912-9685-49c5-96ed-af6e8eff8426?wid=725&hei=725&qlt=80&fmt=webp"
  },
  //
  {
    productId: 4,
    url: "https://target.scene7.com/is/image/Target/GUEST_bf5147ce-c5ab-4f81-9c0a-cb2886c3bb99?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 4,
    url: "https://target.scene7.com/is/image/Target/GUEST_90447e65-c771-40bd-8167-ac37dd186200?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // softlips
  {
    productId: 5,
    url: "https://target.scene7.com/is/image/Target/GUEST_f6cb7704-e671-4fda-9d4f-89f082558b97?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 5,
    url: "https://target.scene7.com/is/image/Target/GUEST_95b591eb-9513-4b87-aab0-6067a82afb0a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 5,
    url: "https://target.scene7.com/is/image/Target/GUEST_1a108932-5fde-4dbf-a8fa-7cfdb103bd53?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 5,
    url: "https://target.scene7.com/is/image/Target/GUEST_a9b1f13a-7ab0-4851-a340-03a0fd7e25e6?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 5,
    url: "https://target.scene7.com/is/image/Target/GUEST_acdf22ff-e25c-4a66-a707-ea78a71a880f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // ibuprofen
  {
    productId: 6,
    url: "https://target.scene7.com/is/image/Target/GUEST_112e8e85-82b0-45e8-8fb0-98641c015a64?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 6,
    url: "https://target.scene7.com/is/image/Target/GUEST_c458b3ea-f5d9-46fc-adbf-701057845a21?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 6,
    url: "https://target.scene7.com/is/image/Target/GUEST_3dea7e40-0d6f-4df4-86f2-c85bd6df6f57?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 6,
    url: "https://target.scene7.com/is/image/Target/GUEST_e8dcc799-b2a9-48c0-b6c1-21bb3cb6ad81?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // gloves
  {
    productId: 7,
    url: "https://target.scene7.com/is/image/Target/GUEST_b39f22ca-3923-4667-913e-15b985f3e2ec?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 7,
    url: "https://target.scene7.com/is/image/Target/GUEST_49ad8081-0c5a-4a65-ab3d-cef81e150db3?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 7,
    url: "https://target.scene7.com/is/image/Target/GUEST_790147c6-1aed-4c61-907d-90698ef8bf2c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // cleaner
  {
    productId: 8,
    url: "https://target.scene7.com/is/image/Target/GUEST_8728479b-d46d-41f2-b958-507ff4380cc0?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 8,
    url: "https://target.scene7.com/is/image/Target/GUEST_2f7cb496-367d-4c67-92dc-2dc2b6ecdc7d?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 8,
    url: "https://target.scene7.com/is/image/Target/GUEST_068a0975-6957-4ce1-87df-1ebd2cbfbffb?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // detergent
  {
    productId: 9,
    url: "https://target.scene7.com/is/image/Target/GUEST_2e783c94-55b1-4240-b337-fb7f34b78685?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 9,
    url: "https://target.scene7.com/is/image/Target/GUEST_8b4591a1-b57d-4f61-91ad-10b0a0f08914?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 9,
    url: "https://target.scene7.com/is/image/Target/GUEST_18489b6e-5615-4e29-816e-b68c46ab87f2?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 9,
    url: "https://target.scene7.com/is/image/Target/GUEST_6e0ab8e1-8dc4-4f12-a00e-40665013b9fb?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 9,
    url: "https://target.scene7.com/is/image/Target/GUEST_daf2b89c-54b0-444a-96d7-8aed860f19a0?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // hangers
  {
    productId: 10,
    url: "https://target.scene7.com/is/image/Target/GUEST_f9f5f0e5-d7e3-4e98-97da-7fb68601b76a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 10,
    url: "https://target.scene7.com/is/image/Target/GUEST_acbe6ed8-dbea-4f9f-a7ca-24ec49f4934a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 10,
    url: "https://target.scene7.com/is/image/Target/GUEST_5ac2e286-1e3a-4f8e-be44-2216acbbd05a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 10,
    url: "https://target.scene7.com/is/image/Target/GUEST_ded69ed1-1ae4-453e-b2af-a3ff1cfa0613?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 10,
    url: "https://target.scene7.com/is/image/Target/GUEST_6fdffac5-a10d-4474-b637-a9c3e58c10a1?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // bath towel
  {
    productId: 11,
    url: "https://target.scene7.com/is/image/Target/GUEST_4df85331-3783-44ed-97ad-8c8fc3b933e0?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 11,
    url: "https://target.scene7.com/is/image/Target/GUEST_7f6cf0a6-aa79-4ddf-a682-4ab1686d7907?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 11,
    url: "https://target.scene7.com/is/image/Target/GUEST_8480b43d-5158-4c07-895a-2a9a72fdf900?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 11,
    url: "https://target.scene7.com/is/image/Target/GUEST_9f3fa3a4-da13-4084-8cf9-2956108918e1?wid=725&hei=725&qlt=80&fmt=webp"
  },
  //  steamer
  {
    productId: 12,
    url: "https://target.scene7.com/is/image/Target/GUEST_7a834a86-f9f9-4538-8c1b-4b8e3969d890?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 12,
    url: "https://target.scene7.com/is/image/Target/GUEST_5e537710-99e1-473b-b8a7-7c3d120b8a80?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 12,
    url: "https://target.scene7.com/is/image/Target/GUEST_7d6a2f2c-d202-40e5-bb6a-6d253445d32c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 12,
    url: "https://target.scene7.com/is/image/Target/GUEST_97fc6da7-5373-45ff-ad1e-734318525a3a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 12,
    url: "https://target.scene7.com/is/image/Target/GUEST_99c37297-31ba-402b-9ded-e50c10584c70?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // baking sheets
  {
    productId: 13,
    url: "https://target.scene7.com/is/image/Target/GUEST_c3de7fa2-d876-425d-94dd-c185771b3600?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 13,
    url: "https://target.scene7.com/is/image/Target/GUEST_5af088b1-da7f-4aff-82bd-504452ac0152?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 13,
    url: "https://target.scene7.com/is/image/Target/GUEST_9b5021b4-38b6-4c6d-8c33-0098ed28783f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 13,
    url: "https://target.scene7.com/is/image/Target/GUEST_fc8decb7-7944-41c9-bc0d-270559b1c480?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 13,
    url: "https://target.scene7.com/is/image/Target/GUEST_12b94ce2-deae-44da-ab8d-1f821ce90425?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // knives
  {
    productId: 14,
    url: "https://target.scene7.com/is/image/Target/GUEST_95b3f12b-48b4-49d1-8090-986d554e4460?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 14,
    url: "https://target.scene7.com/is/image/Target/GUEST_46460385-371d-442e-a8ae-a332b68c6a42?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 14,
    url: "https://target.scene7.com/is/image/Target/GUEST_f9cac995-bd98-43f9-bb9f-44f3f4ab71eb?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 14,
    url: "https://target.scene7.com/is/image/Target/GUEST_9ef5f9ee-d2c4-4db4-870b-d34b21846a95?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 14,
    url: "https://target.scene7.com/is/image/Target/GUEST_f5b53685-6f4d-478c-b22c-30beb9466968?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // glasses
  {
    productId: 15,
    url: "https://target.scene7.com/is/image/Target/GUEST_d55fe317-44a2-4364-8027-e0cc747c36fe?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 15,
    url: "https://target.scene7.com/is/image/Target/GUEST_6cf0cdbd-d832-41a4-b8c3-cdb3e788832a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 15,
    url: "https://target.scene7.com/is/image/Target/GUEST_8aab4f41-14ad-47fc-a610-0c5ba5aac16a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 15,
    url: "https://target.scene7.com/is/image/Target/GUEST_75921996-d0ec-44ad-857e-f11d48e3df32?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 15,
    url: "https://target.scene7.com/is/image/Target/GUEST_3eacec31-1667-4d22-801a-bfc0469bfd5c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // grilling set
  {
    productId: 16,
    url: "https://target.scene7.com/is/image/Target/GUEST_503f7ece-12e5-47ed-aaf8-43f58c8a878e?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 16,
    url: "https://target.scene7.com/is/image/Target/GUEST_ec5d6992-b1a6-42cc-b52a-d9df095418c8?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 16,
    url: "https://target.scene7.com/is/image/Target/GUEST_120416b6-7e73-4c84-b4ee-d51a09e09918?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 16,
    url: "https://target.scene7.com/is/image/Target/GUEST_194686fa-068c-488c-acb4-43a30ada2041?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 16,
    url: "https://target.scene7.com/is/image/Target/GUEST_1a9f6dfe-2cc5-4271-85b5-c771aa2d5bb7?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // cookware
  {
    productId: 17,
    url: "https://target.scene7.com/is/image/Target/GUEST_c70deef0-45f1-4012-aec2-b0c208fa4f1f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 17,
    url: "https://target.scene7.com/is/image/Target/GUEST_4066db4c-60e4-4054-a30e-79de7a705f2a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 17,
    url: "https://target.scene7.com/is/image/Target/GUEST_5c7d8556-b5b1-4790-b3db-914de5772d46?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 17,
    url: "https://target.scene7.com/is/image/Target/GUEST_985fcfb2-c106-4fff-b19c-cfb84d3e1021?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // oven
  {
    productId: 18,
    url: "https://target.scene7.com/is/image/Target/GUEST_13bfac06-8fd0-479f-8eeb-aa45c4ded987?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 18,
    url: "https://target.scene7.com/is/image/Target/GUEST_a63f75a7-0633-478e-8e65-c7c49fa1119c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 18,
    url: "https://target.scene7.com/is/image/Target/GUEST_9febda15-126a-47e8-8407-8535b3b1a199?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 18,
    url: "https://target.scene7.com/is/image/Target/GUEST_5c3132c2-39da-43e1-b7bf-7cd82557d8d4?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 18,
    url: "https://target.scene7.com/is/image/Target/GUEST_c6e1d46f-9ff1-42e0-843b-2b4c09039f8f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // eggs
  {
    productId: 19,
    url: "https://target.scene7.com/is/image/Target/GUEST_393a7c9a-e12f-4983-8f4a-e58100a6192d?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 19,
    url: "https://target.scene7.com/is/image/Target/GUEST_7f6b7e86-a1a9-42de-8ecd-daa962918f23?wid=1000&hei=1000&qlt=80&fmt=webp"
  },
  {
    productId: 19,
    url: "https://www.target.com/p/grade-a-large-eggs-12ct-good-38-gather-8482-packaging-may-vary/-/A-14713534#lnk=sametab"
  },
  // bread
  {
    productId: 20,
    url: "https://target.scene7.com/is/image/Target/GUEST_29132c2d-a484-40d1-ab91-99e94b42570b?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 20,
    url: "https://target.scene7.com/is/image/Target/GUEST_6e3410ff-759f-490f-bdd2-37e03996658a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 20,
    url: "https://target.scene7.com/is/image/Target/GUEST_b50a4730-d5f4-44b1-8a73-0542e692783a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // rice
  {
    productId: 21,
    url: "https://target.scene7.com/is/image/Target/GUEST_fa21f166-ea81-413f-8689-37a717b50eb9?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 21,
    url: "https://target.scene7.com/is/image/Target/GUEST_a609b627-d64f-4979-a563-398e23ab3ba8?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 21,
    url: "https://target.scene7.com/is/image/Target/GUEST_b656a926-bfe1-4ecf-878e-2bddf3560697?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // butter
  {
    productId: 22,
    url: "https://target.scene7.com/is/image/Target/GUEST_bc1c55a1-5f39-4570-a82c-f4eb8fbb5369?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 22,
    url: "https://target.scene7.com/is/image/Target/GUEST_c0be3464-e4a6-41b3-9aa5-882a32dc2e93?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 22,
    url: "https://target.scene7.com/is/image/Target/GUEST_433678d9-ffdd-4475-91ba-b619e9461e78?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 22,
    url: "https://target.scene7.com/is/image/Target/GUEST_0dea9e4c-2896-4354-ae4e-d5b7553445b6?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 22,
    url: "https://target.scene7.com/is/image/Target/GUEST_4d614652-079c-48ec-9c83-1afddd645866?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // sriracha
  {
    productId: 23,
    url: "https://target.scene7.com/is/image/Target/GUEST_f96d46a0-42c1-432a-aac7-bfbfea7a2b6a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 23,
    url: "https://target.scene7.com/is/image/Target/GUEST_eadcf8a9-3a0e-4714-87b8-46131dc7afde?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 23,
    url: "https://www.target.com/p/huy-fong-sriracha-chili-sauce-28oz/-/A-15195477#lnk=sametab",
  },
  // Nutella
  {
    productId: 24,
    url: "https://target.scene7.com/is/image/Target/GUEST_181498a0-07c9-4e17-9da7-fca5fa6502e5?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 24,
    url: "https://target.scene7.com/is/image/Target/GUEST_516fb00c-edc1-4535-97f7-cf53809e9461?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 24,
    url: "https://target.scene7.com/is/image/Target/GUEST_766b0667-5517-4556-b810-a92041abdea2?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 24,
    url: "https://target.scene7.com/is/image/Target/GUEST_2413c6d1-74f5-426e-995d-beb9cf1c0625?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 24,
    url: "https://target.scene7.com/is/image/Target/GUEST_cdcb810e-0d73-46e8-9b86-adbb2f28d13c?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // Ritter Sport
  {
    productId: 25,
    url: "https://target.scene7.com/is/image/Target/GUEST_b8b5ae9f-39d5-4f84-854b-51863c9affa5?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 25,
    url: "https://target.scene7.com/is/image/Target/GUEST_45640aec-c180-44bc-a960-31bf477f0374?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 25,
    url: "https://target.scene7.com/is/image/Target/GUEST_78ea15a7-edf1-4c41-bc12-6a54c0ae0974?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 25,
    url: "https://target.scene7.com/is/image/Target/GUEST_5b0ad6c1-541c-4b7f-aba0-9a0010e6dbdb?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // ice cream
  {
    productId: 26,
    url: "https://target.scene7.com/is/image/Target/GUEST_1ba11e1d-e8da-4e92-9c38-35edde29f34e?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 26,
    url: "https://target.scene7.com/is/image/Target/GUEST_2baec4f2-fce0-4e12-95a0-afcfcdd03a11?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 26,
    url: "https://target.scene7.com/is/image/Target/GUEST_93a7971f-55d4-449a-9557-8f33a7dc346f?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 26,
    url: "https://target.scene7.com/is/image/Target/GUEST_6448998b-19fd-4fc1-87d0-75d2c2e0bf1b?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // donuts
  {
    productId: 27,
    url: "https://target.scene7.com/is/image/Target/GUEST_56eb871e-f7bc-4816-a7c0-ed2d40476322?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 27,
    url: "https://target.scene7.com/is/image/Target/GUEST_16174faa-8c7f-41e9-aedc-92db5abc52b5?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 27,
    url: "https://target.scene7.com/is/image/Target/GUEST_6aa080a3-0003-4089-a57d-6ae123e0cc85?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // orange juice
  {
    productId: 28,
    url: "https://target.scene7.com/is/image/Target/GUEST_aaae82e7-fb81-434a-8c47-1e449b639cd0?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 28,
    url: "https://target.scene7.com/is/image/Target/GUEST_b77c3058-2563-4480-97af-9ebef5ca5aa3?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 28,
    url: "https://target.scene7.com/is/image/Target/GUEST_b92ff81d-3340-4cb7-acf0-ab31bec2797d?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 28,
    url: "https://target.scene7.com/is/image/Target/GUEST_4b65003c-d468-4efe-9e96-26263e903736?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // soymilk
  {
    productId: 29,
    url: "https://target.scene7.com/is/image/Target/GUEST_f4c46d35-0248-49fc-953f-871ff436c0f3?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 29,
    url: "https://target.scene7.com/is/image/Target/GUEST_f88d7173-f120-4c18-a42d-133112a018ac?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 29,
    url: "https://target.scene7.com/is/image/Target/GUEST_dce65f81-89fe-4b9b-bc7c-220a13cfa267?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 29,
    url: "https://target.scene7.com/is/image/Target/GUEST_e6031c81-2613-456d-b6a1-e388e92daa51?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 29,
    url: "https://target.scene7.com/is/image/Target/GUEST_d67f0991-74ee-4a97-ad0c-1f6954af680a?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // Meiomi
  {
    productId: 30,
    url: "https://target.scene7.com/is/image/Target/GUEST_81669d0e-aedf-47a7-8813-5c5cdc40308e?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 30,
    url: "https://target.scene7.com/is/image/Target/GUEST_28af7083-5a57-470f-a18e-5743265c20ee?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  {
    productId: 30,
    url: "https://target.scene7.com/is/image/Target/GUEST_7ea6dbc3-be93-4cf3-b4a2-a0b8b88c4a86?wid=1000&hei=1000&qlt=80&fmt=webp",
  },
  // tv
  {
    productId: 31,
    url: "https://target.scene7.com/is/image/Target/GUEST_3a93aab9-b48f-46b8-b60c-96884d75a6a1?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 31,
    url: "https://target.scene7.com/is/image/Target/GUEST_72410128-cfb1-432e-88ea-5ab13e717599?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 31,
    url: "https://target.scene7.com/is/image/Target/GUEST_924104f8-5c07-4a02-92de-3b9871dfc645?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 31,
    url: "https://target.scene7.com/is/image/Target/GUEST_b633410b-c27d-496d-ac9b-a71811d78df5?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 31,
    url: "https://target.scene7.com/is/image/Target/GUEST_5e9b4480-bff4-4d2c-b9a2-0728df5d30b0?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // iPad
  {
    productId: 32,
    url: "https://target.scene7.com/is/image/Target/GUEST_18310cef-f08e-4e8c-9db0-2590f8b84993?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 32,
    url: "https://target.scene7.com/is/image/Target/GUEST_dd59e86f-a518-4a99-9cca-345b9a9dd0a2?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 32,
    url: "https://target.scene7.com/is/image/Target/GUEST_21440fa5-7299-42ba-b407-877e3cc67633?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 32,
    url: "https://target.scene7.com/is/image/Target/GUEST_1622d248-e46e-4aee-8bf6-5a92ebc36c25?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 32,
    url: "https://target.scene7.com/is/image/Target/GUEST_7832fadf-82ae-4476-b362-f57482357ec8?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // airpods
  {
    productId: 33,
    url: "https://target.scene7.com/is/image/Target/GUEST_d481ae28-76cf-45fc-a28b-0dca314d449c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 33,
    url: "https://target.scene7.com/is/image/Target/GUEST_6b120943-a30a-4f67-86ad-c68e8f6a6263?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 33,
    url: "https://target.scene7.com/is/image/Target/GUEST_dfd1cf3d-6a14-47cb-8de7-eac25ffa938c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 33,
    url: "https://target.scene7.com/is/image/Target/GUEST_cc8ca1c1-47c0-4c8f-8599-f2c88105e368?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 33,
    url: "https://target.scene7.com/is/image/Target/GUEST_15cd26e7-ef1e-4932-9e94-570420e5529e?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // HomePod
  {
    productId: 34,
    url: "https://target.scene7.com/is/image/Target/GUEST_12befb49-d746-4a15-96a7-1c733535b714?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 34,
    url: "https://target.scene7.com/is/image/Target/GUEST_6733c910-42e6-4e86-847b-4bee6af60495?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 34,
    url: "https://target.scene7.com/is/image/Target/GUEST_5b02c92e-4fba-4baa-b286-fe9368b9e5dd?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 34,
    url: "https://target.scene7.com/is/image/Target/GUEST_2ec72129-7e62-4b9d-b5c7-5cb201a208e4?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // webcam
  {
    productId: 35,
    url: "https://target.scene7.com/is/image/Target/GUEST_9e85f26e-2acd-4ea3-8515-67ce98eb3fa5?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 35,
    url: "https://target.scene7.com/is/image/Target/GUEST_8c0ac985-6d8b-4b28-9a26-14d654cbbab8?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 35,
    url: "https://target.scene7.com/is/image/Target/GUEST_4c6f3a6c-582e-4657-879d-cf1a6379199d?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 35,
    url: "https://target.scene7.com/is/image/Target/GUEST_c69055f4-4a0d-4642-989b-9db9ee4a5034?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 35,
    url: "https://target.scene7.com/is/image/Target/GUEST_8304d3d3-fad5-4049-8641-a98ac9a04638?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // smart lights
  {
    productId: 36,
    url: "https://target.scene7.com/is/image/Target/GUEST_a91c5af2-3a15-4475-a1dc-2e2e9dbb6e8e?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 36,
    url: "https://target.scene7.com/is/image/Target/GUEST_da827038-f852-4bc2-9d8f-3498e7ee06b4?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 36,
    url: "https://target.scene7.com/is/image/Target/GUEST_a83995a1-a302-4e5b-a1e7-db914cb950ba?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 36,
    url: "https://target.scene7.com/is/image/Target/GUEST_63344b4b-cddb-4611-b9ed-086524fb36bb?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 36,
    url: "https://target.scene7.com/is/image/Target/GUEST_61091bf1-87b0-49c3-a7d8-b99546ee4e8d?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // robovac
  {
    productId: 37,
    url: "https://target.scene7.com/is/image/Target/GUEST_7213a330-c11b-4ffc-bbf7-e3cd1ce8df2e?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 37,
    url: "https://target.scene7.com/is/image/Target/GUEST_f315a1c3-9428-46d9-b2b2-d78ac0513f44?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 37,
    url: "https://target.scene7.com/is/image/Target/GUEST_b7541611-7fa8-4959-8f2d-2b1fb6763289?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 37,
    url: "https://target.scene7.com/is/image/Target/GUEST_711b7b0b-b8a9-4e96-a25a-330ab2dadae3?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 37,
    url: "https://target.scene7.com/is/image/Target/GUEST_aacae061-45b5-434c-85c3-324c547dcaeb?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // Xbox
  {
    productId: 38,
    url: "https://target.scene7.com/is/image/Target/GUEST_15916c73-9548-498f-a378-f67cb42ccd06?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 38,
    url: "https://target.scene7.com/is/image/Target/GUEST_8e47ba0b-98c4-4a02-8937-9480006e827c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 38,
    url: "https://target.scene7.com/is/image/Target/GUEST_d673f0a5-2066-4126-86ee-9d7e1dff41f3?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 38,
    url: "https://target.scene7.com/is/image/Target/GUEST_1e8481fb-03e9-4138-909e-8fb9e0452966?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 38,
    url: "https://target.scene7.com/is/image/Target/GUEST_e71c9733-f3ea-4aef-a115-24e970ed3f36?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // PS5
  {
    productId: 39,
    url: "https://target.scene7.com/is/image/Target/GUEST_ae4e8352-bcea-4dd7-97ad-13be08ec32fb?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 39,
    url: "https://target.scene7.com/is/image/Target/GUEST_9c41d78f-1155-4069-ab97-e2cef0ade1df?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 39,
    url: "https://target.scene7.com/is/image/Target/GUEST_2edf9c9c-090e-47cd-9de9-9a9fe1fa7f02?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 39,
    url: "https://target.scene7.com/is/image/Target/GUEST_a790e53b-482f-42e0-92ae-b5ce6c0bdb26?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // Meta Quest 2
  {
    productId: 40,
    url: "https://target.scene7.com/is/image/Target/GUEST_a0a92f6c-302a-4f2e-aed1-8e37825e84eb?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 40,
    url: "https://target.scene7.com/is/image/Target/GUEST_cd5e5f29-206d-4ddd-878e-ea6fcf6ee2da?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 40,
    url: "https://target.scene7.com/is/image/Target/GUEST_8e221e17-a170-4ccf-806f-e1a4e90ac411?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 40,
    url: "https://target.scene7.com/is/image/Target/GUEST_f3fb424d-1682-46b5-ba62-ab626305ed38?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 40,
    url: "https://target.scene7.com/is/image/Target/GUEST_c6d20ae0-2914-4641-943c-43ad686dd0c0?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // gaming keyboard
  {
    productId: 41,
    url: "https://target.scene7.com/is/image/Target/GUEST_8791c2eb-1466-4b55-b8da-8d4f2d8cb9c1?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 41,
    url: "https://target.scene7.com/is/image/Target/GUEST_3a4a1757-89f3-4a50-a39d-d257ebe3749a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 41,
    url: "https://target.scene7.com/is/image/Target/GUEST_595ad27f-2b82-413d-9003-8499c2bf1ac2?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 41,
    url: "https://target.scene7.com/is/image/Target/GUEST_327616a8-095d-46f0-b45f-828739b86440?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 41,
    url: "https://target.scene7.com/is/image/Target/GUEST_f1bee02e-83cc-4ca6-9818-c398cb00890e?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // gaming chair
  {
    productId: 42,
    url: "https://target.scene7.com/is/image/Target/GUEST_e9fc6772-46e0-4467-9dbe-ed90b092f691?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 42,
    url: "https://target.scene7.com/is/image/Target/GUEST_d22d1df4-74a2-43fb-a015-4759ada01f67?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 42,
    url: "https://target.scene7.com/is/image/Target/GUEST_5dc90c51-8200-46ac-87a0-fbb040f71ff4?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 42,
    url: "https://target.scene7.com/is/image/Target/GUEST_63aea3ed-1447-445a-97a3-1df96f6de56f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 42,
    url: "https://target.scene7.com/is/image/Target/GUEST_004ec71d-b437-4217-82ca-fec8e53286b4?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // arcade
  {
    productId: 43,
    url: "https://target.scene7.com/is/image/Target/GUEST_a70356a5-46c5-4ca2-b044-8433ad633dc7?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 43,
    url: "https://target.scene7.com/is/image/Target/GUEST_643d7c4f-e36e-4086-8dcf-4e1e53ff41e8?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 43,
    url: "https://target.scene7.com/is/image/Target/GUEST_1cf5fdf3-7286-4a6b-87b8-57987b09a09d?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 43,
    url: "https://target.scene7.com/is/image/Target/GUEST_34da2f79-4f43-4174-9fd8-5fba36dbfb83?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 43,
    url: "https://target.scene7.com/is/image/Target/GUEST_ce671651-07c6-4231-b064-def990391001?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // free weights
  {
    productId: 44,
    url: "https://target.scene7.com/is/image/Target/GUEST_5eef7b28-4a4f-4453-bba9-04139f4b984d?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 44,
    url: "https://target.scene7.com/is/image/Target/GUEST_5c1d5908-80c0-43e8-ac72-a1c6288c1d31?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 44,
    url: "https://target.scene7.com/is/image/Target/GUEST_090623c3-d9b7-49b4-b5cd-b4ff82d4ff68?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // yoga mat
  {
    productId: 45,
    url: "https://target.scene7.com/is/image/Target/GUEST_d972c756-ef1b-4ed7-bdf5-1b86ef5fc625?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 45,
    url: "https://target.scene7.com/is/image/Target/GUEST_b4c34ee9-edab-4ee1-9527-6f91c2484e64?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 45,
    url: "https://target.scene7.com/is/image/Target/GUEST_b63a87be-d62d-4b51-a285-27e34d6fb9d7?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // hiking
  {
    productId: 46,
    url: "https://target.scene7.com/is/image/Target/GUEST_bae5a4c0-93b9-4206-8b57-afd0d1c94218?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 46,
    url: "https://target.scene7.com/is/image/Target/GUEST_2c55db8a-4025-4ddd-b477-a73ba355768a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 46,
    url: "https://target.scene7.com/is/image/Target/GUEST_7c1e3d72-b817-4baa-8431-d8902c8cc5f2?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 46,
    url: "https://target.scene7.com/is/image/Target/GUEST_57e70487-a425-42ea-9da9-e0da692f32b2?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 46,
    url: "https://target.scene7.com/is/image/Target/GUEST_1758ee75-a8ce-4589-9258-dea5410ae6db?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // water bottle
  {
    productId: 47,
    url: "https://target.scene7.com/is/image/Target/GUEST_db6caea9-d8b6-437f-9070-3781ace2584c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 47,
    url: "https://target.scene7.com/is/image/Target/GUEST_1f4127ff-44b7-41fa-9f79-c04f7c2a4695?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // dog food
  {
    productId: 48,
    url: "https://target.scene7.com/is/image/Target/GUEST_688bc1cc-b985-4e0b-bce4-c08bd28c34e0?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 48,
    url: "https://target.scene7.com/is/image/Target/GUEST_63c49ce1-6b1d-446c-a55b-04d00dd2acd5?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 48,
    url: "https://target.scene7.com/is/image/Target/GUEST_33acd736-7e1d-4d56-9b08-a3d1157c004a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 48,
    url: "https://target.scene7.com/is/image/Target/GUEST_0fd99f02-5aa0-4eb4-9c80-dc8d8dcf8121?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 48,
    url: "https://target.scene7.com/is/image/Target/GUEST_90feeb02-4134-4fc1-8c5b-be1358bc838b?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // cat food
  {
    productId: 49,
    url: "https://target.scene7.com/is/image/Target/GUEST_22e19e8c-9cd8-48db-b94b-0ecf52fbd37a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 49,
    url: "https://target.scene7.com/is/image/Target/GUEST_85a2827c-958f-42e8-b35b-cdc7bed74c7f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 49,
    url: "https://target.scene7.com/is/image/Target/GUEST_e0b7fae9-40a7-45bc-9edf-50749a0489c9?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 49,
    url: "https://target.scene7.com/is/image/Target/GUEST_1d8a2719-01e4-4116-9129-b21e893da525?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // dog toy
  {
    productId: 50,
    url: "https://target.scene7.com/is/image/Target/GUEST_a85d717b-b451-4299-8e4d-f030bffa03f2?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 50,
    url: "https://target.scene7.com/is/image/Target/GUEST_351ef836-c19c-4300-82d0-78d972999451?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 50,
    url: "https://target.scene7.com/is/image/Target/GUEST_dd972cb8-0dfc-4490-8333-dc489724fa99?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // cat toy
  {
    productId: 51,
    url: "https://target.scene7.com/is/image/Target/GUEST_bd0bac8f-53de-44dc-9610-3c9f7c4c8b8c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 51,
    url: "https://target.scene7.com/is/image/Target/GUEST_67d3b0eb-8e52-4acd-9d12-ebfa6dc72a46?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 51,
    url: "https://target.scene7.com/is/image/Target/GUEST_df8c1d7c-12e2-4521-9131-a54e6c3f4f0c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // litter
  {
    productId: 52,
    url: "https://target.scene7.com/is/image/Target/GUEST_f88a8424-078f-4a7c-ac2e-64881b225be2?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 52,
    url: "https://target.scene7.com/is/image/Target/GUEST_f8d28124-f2dc-403b-b1dc-989cc0a96e0a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 52,
    url: "https://target.scene7.com/is/image/Target/GUEST_440ce76b-5cb0-4307-b721-bf1177f0087f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 52,
    url: "https://target.scene7.com/is/image/Target/GUEST_82cba777-7c33-4c13-8dbc-458bd589be9f?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 52,
    url: "https://target.scene7.com/is/image/Target/GUEST_e6adfab6-e1b0-4d57-a393-7262c19f320a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // dining table
  {
    productId: 53,
    url: "https://target.scene7.com/is/image/Target/GUEST_4f4ba632-d867-451f-a294-d3a4ddebef67?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 53,
    url: "https://target.scene7.com/is/image/Target/GUEST_b4af8024-6584-4ae4-a476-c091622633b6?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 53,
    url: "https://target.scene7.com/is/image/Target/GUEST_61b3a25d-fa6a-497e-9907-303c8775d606?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 53,
    url: "https://target.scene7.com/is/image/Target/GUEST_6c980d39-7246-494f-b7d1-93b835f6b488?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // side tables
  {
    productId: 54,
    url: "https://target.scene7.com/is/image/Target/GUEST_8a672ebd-dcf7-41be-9b2b-aa3cedd351ba?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 54,
    url: "https://target.scene7.com/is/image/Target/GUEST_6fb2cce2-2bc0-4a13-96b3-9f10bb2dd751?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 54,
    url: "https://target.scene7.com/is/image/Target/GUEST_7b99fcbb-8382-4040-a90d-2a2ed3eb30d9?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 54,
    url: "https://target.scene7.com/is/image/Target/GUEST_ee19eef3-bc57-4a25-a3ab-dd33fe55fe1e?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 54,
    url: "https://target.scene7.com/is/image/Target/GUEST_a398085e-2c11-4078-80cf-e271650e32bd?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // bookcase
  {
    productId: 55,
    url: "https://target.scene7.com/is/image/Target/GUEST_ec1a74d3-9304-4c68-a485-f939992eef26?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 55,
    url: "https://target.scene7.com/is/image/Target/GUEST_ee096468-a661-40d5-80ce-fe3e95869991?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 55,
    url: "https://target.scene7.com/is/image/Target/GUEST_59abbfe1-6fda-48a3-8c47-9026c31f1ee8?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 55,
    url: "https://target.scene7.com/is/image/Target/GUEST_be6f45ce-97c4-4b74-bfb6-b49b3283c8be?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 55,
    url: "https://target.scene7.com/is/image/Target/GUEST_673071bd-fa01-45ae-9f39-e8b7b31e6a97?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // whiteboard
  {
    productId: 56,
    url: "https://target.scene7.com/is/image/Target/GUEST_f02f0790-9369-443c-95a0-d407ee8aacfc?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 56,
    url: "https://target.scene7.com/is/image/Target/GUEST_15cdceeb-af55-42aa-9ff2-65d266b9541c?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 56,
    url: "https://target.scene7.com/is/image/Target/GUEST_135d6ace-8586-465f-973d-dc4af74b787a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 56,
    url: "https://target.scene7.com/is/image/Target/GUEST_a3a2c4b9-6724-4edd-8bfb-14c768a1e3a9?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 56,
    url: "https://target.scene7.com/is/image/Target/GUEST_46df70b8-ba2e-4869-a208-57847bb8e4a9?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // picture frame
  {
    productId: 57,
    url: "https://target.scene7.com/is/image/Target/GUEST_3ece2510-8fc0-49c4-a648-d401d574974b?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 57,
    url: "https://target.scene7.com/is/image/Target/GUEST_f7eb4cb7-9b1f-42a3-8dc8-58215d1421af?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 57,
    url: "https://target.scene7.com/is/image/Target/GUEST_f14f35da-8e2d-4606-8796-0b9261bcc1d1?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 57,
    url: "https://target.scene7.com/is/image/Target/GUEST_ad180319-e460-46b5-bdb6-c94bc372fda3?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 57,
    url: "https://target.scene7.com/is/image/Target/GUEST_ee79f20b-225d-4935-9218-964850e7a425?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // vase
  {
    productId: 58,
    url: "https://target.scene7.com/is/image/Target/GUEST_6362d263-417f-434a-ac0e-38ad99eeef0a?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 58,
    url: "https://target.scene7.com/is/image/Target/GUEST_7772f6e4-0482-4329-8f9e-96e0f712f0b3?wid=725&hei=725&qlt=80&fmt=webp"
  },
  {
    productId: 58,
    url: "https://target.scene7.com/is/image/Target/GUEST_65149ed5-aa6d-4934-b929-e06c31aaf602?wid=725&hei=725&qlt=80&fmt=webp"
  },
  // clearance
  // {
  //   productId: 59,
  //   url: ""
  // },
]


let prodIds = [];
demoProductImages.forEach(image => {
  if (!prodIds.includes(image.productId)) {
    prodIds.push(image.productId)
  }
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'ProductImages',
      demoProductImages,
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'ProductImages',
      { productId: { [Op.in]: prodIds } }
    )
  }
};
