import { InnerPage } from "@/components/InnerPage";
import { PrimaryButton } from "@/components/PrimaryButton";

export default function NotFound() {
  return (
    <InnerPage title="Page not found">
      <p>This page does not exist. Head back to the homepage to scan smarter.</p>
      <PrimaryButton href="/">Back to home</PrimaryButton>
    </InnerPage>
  );
}
