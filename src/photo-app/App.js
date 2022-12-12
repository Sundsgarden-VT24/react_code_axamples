import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./components/stock-photo-app/Photo";

const clientId = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [newImages, setNewImages] = useState(false);

  const mounted = useRef(false);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    // will change wether we searching or getting
    //the deafult image
    //url =
    //`${mainUrl}?client_id=9xQVsYWvPM5w9GrS-ndTJkE11g0MO1MVStHDbVv52_E`;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    if (query) {
      url = `${searchUrl}${clientId}${urlPage}${urlQuery}`;
      //url is there is a query
    } else {
      url = `${mainUrl}${clientId}${urlPage}`;
    }

    //url = `${mainUrl}${clientId}&page=3`;
    //url = `${mainUrl}${clientId}${urlPage}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          //if our photos are in a query/search
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      //setPhotos((oldPhotos) => {
      // return [...oldPhotos, ...data];
      //});
      // at the moment we ar overriding
      // we want to add them to our array instead
      //NEW SCROLL
      setNewImages(false);
      setLoading(false);
    } catch (error) {
      setNewImages(false);
      setLoading(false);
      //console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    //this only runs after the first render
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!newImages) return;
    if (loading) return;
    setPage((oldPage) => oldPage + 1);
    //console.log("second!");
  }, [newImages]);

  const event = () => {
    //check innerHegiht, scrollY and bodyheight
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      // as we are scrolling we want
      //to set the state valie equal to true
      setNewImages(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", event);
    return () => window.removeEventListener("scroll", event);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Hello");
    if (!query) return;
    if (page === 1) {
      fetchImages();
      return;
    }
    setPage(1);

    //fetchImages();
  };

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            className="form-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image) => {
            //console.log(image);
            return <Photo key={image.id} {...image} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
