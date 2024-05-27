import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ConvexClientProvider } from "@/app/provider";
import { Toaster } from "@/components/ui/sonner";
import { Pen } from "lucide-react";
import CreatePostModal from "@/components/modal/create-post-modal";
import EditPostModal from "@/components/modal/edit-post-modal";
import CommentModal from "@/components/modal/comment-modalz";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "x",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <CreatePostModal />
          <EditPostModal />
          <CommentModal />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster
              theme="light"
              position="bottom-center"
              closeButton
              richColors
            />
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
