import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const [playlists, setPlaylists] = useState(["Playlist 1", "Playlist 2", "Playlist 3"]);
  const [newPlaylistName, setNewPlaylistName] = useState("");

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim() !== "") {
      setPlaylists([...playlists, newPlaylistName]);
      setNewPlaylistName("");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full p-4 bg-blue-600 text-white text-center">
        <h1 className="text-3xl font-bold">Music Streaming Service</h1>
      </header>
      <main className="flex-1 w-full p-4">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="browse" className="w-full">
            <TabsList className="flex justify-center mb-4">
              <TabsTrigger value="browse">Browse</TabsTrigger>
              <TabsTrigger value="search">Search</TabsTrigger>
              <TabsTrigger value="library">Library</TabsTrigger>
            </TabsList>
            <TabsContent value="browse">
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle>Top Hits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Song 1</p>
                    <p>Song 2</p>
                    <p>Song 3</p>
                  </CardContent>
                </Card>
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle>New Releases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Song 4</p>
                    <p>Song 5</p>
                    <p>Song 6</p>
                  </CardContent>
                </Card>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="search">
              <div className="flex flex-col items-center">
                <Input placeholder="Search for songs, artists, or albums" className="mb-4 w-full" />
                <Button>Search</Button>
              </div>
            </TabsContent>
            <TabsContent value="library">
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle>Your Playlists</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {playlists.map((playlist, index) => (
                      <p key={index}>{playlist}</p>
                    ))}
                  </CardContent>
                </Card>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Create New Playlist</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New Playlist</DialogTitle>
                    </DialogHeader>
                    <Input
                      placeholder="Playlist Name"
                      value={newPlaylistName}
                      onChange={(e) => setNewPlaylistName(e.target.value)}
                      className="mb-4"
                    />
                    <Button onClick={handleCreatePlaylist}>Create</Button>
                  </DialogContent>
                </Dialog>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="w-full p-4 bg-blue-600 text-white text-center">
        <p>&copy; 2023 Music Streaming Service</p>
      </footer>
    </div>
  );
};

export default Index;