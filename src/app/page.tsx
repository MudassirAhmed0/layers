import Hero from "@/components/hero";
import MockImage from "@/components/mock-image";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Hero/>
    <MockImage/>
      <div className="h-screen">
      </div>
      <div className="container mx-auto px-4">
  <div style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
    <h2 className="text-6xl font-medium text-center mb-16">
      Finished Coding. Now What?
    </h2>
  </div>
  <div className="mb-24 md:mb-48 flex justify-center">
    <div className="z-0 h-full max-h-[400px] rounded-xl border border-border bg-background overflow-hidden w-full max-w-3xl min-h-[655px] md:min-h-[500px]">
      <div className="flex flex-col gap-y-2 border-b border-border p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <div className="h-2 w-2 rounded-full bg-yellow-500" />
          <div className="h-2 w-2 rounded-full bg-green-500" />
        </div>
      </div>
      <pre className="bg-background">
        <code className="block w-full overflow-auto p-4">
          <div className="flex flex-col text-sm font-mono w-full">
            <div className="whitespace-pre-wrap">
              <span className="text-neutral-400">$ </span>
              <span className="text-foreground">npm run build</span>
            </div>
            <div className="whitespace-pre-wrap">
              <span className="text-neutral-500">
                &gt; Building production bundle...
              </span>
            </div>
            <div className="whitespace-pre-wrap">
              <span className="text-green-500">✓ Build successful! (3.2s)</span>
            </div>
            <div className="h-4" />
            <div className="whitespace-pre-wrap">
              <span className="text-neutral-400">$ </span>
              <span className="text-foreground">npm run deploy</span>
            </div>
            <div className="whitespace-pre-wrap">
              <span className="text-neutral-500">
                &gt; Deploying to production...
              </span>
            </div>
            <div className="whitespace-pre-wrap">
              <span className="text-green-500">
                ✓ Deployment complete! Your app is live.
              </span>
            </div>
            <div className="h-4" />
            <div className="whitespace-pre-wrap">
              <span className="text-neutral-400">$ </span>
              <span className="text-foreground">npm run get-users</span>
            </div>
            <div className="whitespace-pre-wrap">
              <span className="text-red-500">
                ERR! Command not found: get users
              </span>
            </div>
            <div className="h-4" />
            <div className="whitespace-pre-wrap">
              <span className="text-neutral-400">$ </span>
              <span className="text-foreground">
                npx expo install expo-get-users --please --now -f
              </span>
            </div>
            <div className="whitespace-pre-wrap">
              <span className="text-neutral-500">
                Installing package expo-get-users...
              </span>
            </div>
            <div className="whitespace-pre-wrap">
              <span className="text-red-500">
                ✖ Failed to install package: Could not find package
                "expo-get-users" matching version latest.
              </span>
            </div>
            <div className="h-4" />
            <div className="whitespace-pre-wrap">
              <span className="text-neutral-400">$ </span>
              <span className="text-foreground">
                git clone git@github.com:nikita-bier/consumer-gtm.git
                --recursive --MRR=100000
              </span>
            </div>
            <div className="whitespace-pre-wrap">
              <span className="text-red-500">
                fatal: remote error: The requested URL returned error: 500
              </span>
            </div>
            <div className="h-4" />
            <div className="whitespace-pre-wrap">
              <span className="text-neutral-400">$ </span>
              <span className="text-sm font-normal tracking-tight text-foreground inline">
                !#^&amp;@%#&amp;^!!!11!!!
              </span>
            </div>
          </div>
        </code>
      </pre>
    </div>
  </div>
  <div
    style={{ opacity: 0, filter: "blur(6px)", transform: "translateY(-6px)" }}
  >
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-2xl text-white">
        You just built an amazing app. But when it comes to marketing, you're
        suddenly lost in a maze of unfamiliar terms, endless options, and
        conflicting advice.
      </p>
      <p className="text-2xl mt-12 inline-block bg-gradient-to-r text-white font-medium">
        Layers changes that.
      </p>
    </div>
  </div>
</div>

    </main>
  );
}
