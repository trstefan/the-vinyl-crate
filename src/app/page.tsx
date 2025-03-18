import { Button } from "@/components/ui/button";
import { ArrowRight, Disc, Heart, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Your Next Favorite Album Awaits
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover new music, rate albums, and connect with a community of music
          lovers. Get personalized recommendations based on your taste and mood.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/discover">
              Start Discovering
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
          <Disc className="h-12 w-12 mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Album Roulette</h2>
          <p className="text-muted-foreground">
            Spin the wheel and discover random albums filtered by genre, decade,
            or rating. Break out of your musical comfort zone.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
          <Heart className="h-12 w-12 mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Daily Vibes</h2>
          <p className="text-muted-foreground">
            Get mood-based recommendations using Spotify's audio features. Find
            the perfect album for any moment.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
          <Users className="h-12 w-12 mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Community</h2>
          <p className="text-muted-foreground">
            Rate albums, share reviews, and connect with friends. See what
            others are listening to and discover together.
          </p>
        </div>
      </div>
    </div>
  );
}
