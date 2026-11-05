import { ArtistConfig } from '../types/artist';

export const defaultArtistConfig: ArtistConfig = {
  // ============================================================
  // ARTIST INFORMATION
  // ============================================================
  artistName: "Jbxnu",

  // ============================================================
  // HERO ASSETS
  // ============================================================
  heroVideoUrl: "/hero-video.mp4",
  heroImage: "/hero-poster.jpg",
  profileImage: "/profile.jpg",

  // ============================================================
  // SOCIALS
  // ============================================================
  socials: [
    {
      id: "spotify",
      platform: "spotify",
      url: "https://open.spotify.com/artist/0amvjGpf4qspvQLwKi29l5?si=qvWHEcgAQiCRCe49ORX51A&utm_source=copy-link",
      label: "Spotify",
      isStreaming: true
    },
    {
      id: "apple-music",
      platform: "apple-music",
      url: "https://music.apple.com/us/artist/jbxnu/1458246872",
      label: "Apple Music",
      isStreaming: true
    },
    {
      id: "youtube",
      platform: "youtube",
      url: "https://youtube.com/@jbxnu?si=INr2wSWulblSvNY8",
      label: "YouTube"
    },
    {
      id: "instagram",
      platform: "instagram",
      url: "https://www.instagram.com/jbxnu_/?hl=en",
      label: "Instagram"
    },
    {
      id: "tiktok",
      platform: "tiktok",
      url: "https://www.tiktok.com/@jbxnu?lang=en&is_from_webapp=1&sender_device=mobile&sender_web_id=7704517314188953101",
      label: "TikTok"
    }
  ],

  // ============================================================
  // SITE TABS
  // ============================================================
  tabs: {
    music: {
      enabled: true,
      title: "MUSIC",
      releases: [
        {
          id: "scary-hours",
          title: "Scary Hours",
          type: "single",
          releaseDate: "October 30, 2026",
          coverArt: "/covers/scary-hours.jpg",
          spotifyUrl: "https://open.spotify.com/track/27NIZh1unHmGNB4wIMO4UW",
          appleMusicUrl: "https://music.apple.com/us/album/scary-hours-single/6824642951",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Jbxnu+Scary+Hours",
          deezerUrl: "https://www.deezer.com/album/1125427592",
          amazonMusicUrl: "https://music.amazon.com/search/Jbxnu+Scary+Hours",
          tidalUrl: "https://listen.tidal.com/search?q=Jbxnu+Scary+Hours",
          itunesUrl: "https://music.apple.com/us/album/scary-hours-single/6824642951"
        },
        {
          id: "running",
          title: "Running",
          type: "single",
          releaseDate: "April 30, 2026",
          coverArt: "/covers/running.jpg",
          spotifyUrl: "https://open.spotify.com/track/0B1AlmJtWmFt6eS35emx0Q",
          appleMusicUrl: "https://music.apple.com/us/album/running-single/1892376575",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Jbxnu+Running",
          deezerUrl: "https://www.deezer.com/album/958642651",
          amazonMusicUrl: "https://music.amazon.com/search/Jbxnu+Running",
          tidalUrl: "https://listen.tidal.com/search?q=Jbxnu+Running",
          itunesUrl: "https://music.apple.com/us/album/running-single/1892376575"
        },
        {
          id: "bridge-the-gap",
          title: "Bridge the Gap",
          type: "single",
          releaseDate: "February 12, 2026",
          coverArt: "/covers/bridge-the-gap.jpg",
          spotifyUrl: "https://open.spotify.com/artist/0amvjGpf4qspvQLwKi29l5",
          appleMusicUrl: "https://music.apple.com/us/album/bridge-the-gap-single/1874799971",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Jbxnu+Bridge+the+Gap",
          youtubeUrl: "https://youtu.be/2VOdU7Yiqds",
          deezerUrl: "https://www.deezer.com/album/912269171",
          amazonMusicUrl: "https://music.amazon.com/search/Jbxnu+Bridge+the+Gap",
          tidalUrl: "https://listen.tidal.com/search?q=Jbxnu+Bridge+the+Gap",
          itunesUrl: "https://music.apple.com/us/album/bridge-the-gap-single/1874799971"
        },
        {
          id: "after-party",
          title: "After Party",
          type: "single",
          releaseDate: "January 18, 2024",
          coverArt: "/covers/after-party.jpg",
          spotifyUrl: "https://open.spotify.com/track/1yPMTS0avnFhPOO3dIyZJo",
          appleMusicUrl: "https://music.apple.com/us/album/after-party-single/1655175800",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Jbxnu+After+Party",
          youtubeUrl: "https://youtu.be/fUHREyn6n_w",
          deezerUrl: "https://www.deezer.com/album/379014077",
          amazonMusicUrl: "https://music.amazon.com/search/Jbxnu+After+Party",
          tidalUrl: "https://listen.tidal.com/search?q=Jbxnu+After+Party",
          itunesUrl: "https://music.apple.com/us/album/after-party-single/1655175800"
        },
        {
          id: "about-you",
          title: "About You",
          type: "single",
          releaseDate: "March 27, 2020",
          coverArt: "/covers/about-you.jpg",
          spotifyUrl: "https://open.spotify.com/track/3wI5GsYQ5LxbfdZuZGCIgs",
          appleMusicUrl: "https://music.apple.com/us/album/about-you-single/1553381550",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Jbxnu+About+You",
          deezerUrl: "https://www.deezer.com/album/135571452",
          amazonMusicUrl: "https://music.amazon.com/search/Jbxnu+About+You",
          tidalUrl: "https://listen.tidal.com/search?q=Jbxnu+About+You",
          itunesUrl: "https://music.apple.com/us/album/about-you-single/1553381550"
        }
      ]
    },

    videos: {
      enabled: true,
      title: "VIDEOS",
      items: [
        {
          id: "bridge-the-gap",
          title: "Jbxnu - Bridge The Gap",
          youtubeId: "2VOdU7Yiqds",
          thumbnail: "https://i.ytimg.com/vi/2VOdU7Yiqds/hqdefault.jpg"
        },
        {
          id: "closure-freestyle",
          title: "Jbxnu - CLOSURE FREESTYLE",
          youtubeId: "mJzoF88_IPo",
          thumbnail: "https://i.ytimg.com/vi/mJzoF88_IPo/hqdefault.jpg"
        },
        {
          id: "lifestyle",
          title: "Jbxnu - Lifestyle",
          youtubeId: "o3XZuPj2LIY",
          thumbnail: "https://i.ytimg.com/vi/o3XZuPj2LIY/hqdefault.jpg"
        },
        {
          id: "after-party",
          title: "Jbxnu - After Party",
          youtubeId: "fUHREyn6n_w",
          thumbnail: "https://i.ytimg.com/vi/fUHREyn6n_w/hqdefault.jpg"
        }
      ]
    },

    live: {
      enabled: true,
      title: "LIVE",
      status: "coming_soon"
    },

    shop: {
      enabled: true,
      title: "STORE",
      status: "coming_soon"
    },

    contact: {
      enabled: true,
      title: "CONTACT",
      managementEmail: ""
    }
  }
};
