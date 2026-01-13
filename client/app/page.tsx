// import Image from "next/image";

// export default function Home() {
//   return (
//    <div className="flex flex-col items-center justify-center h-screen">
//    <button>Click me</button>
//     </div>
//   );
// }
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Button>Click me</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  );
}
