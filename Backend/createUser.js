import bcrypt from "bcryptjs";

const password1 = "Acabana2@26";
const password2 = "Leleo2@26";

async function run() {
  const hash1 = await bcrypt.hash(password1, 10);
  const hash2 = await bcrypt.hash(password2, 10);

  console.log("User 1:", hash1);
  console.log("User 2:", hash2);
}

run();
