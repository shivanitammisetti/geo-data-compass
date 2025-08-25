import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Calendar, Filter } from "lucide-react";

const SearchInterface = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  const eventTypes = [
    "Volcanic Eruptions", "Forest Fires", "Hurricanes", "Floods", 
    "Earthquakes", "Droughts", "Oil Spills", "Algal Blooms"
  ];

  const popularSearches = [
    "Mount Vesuvius eruption data",
    "California wildfire aerosols",
    "Hurricane tracking datasets",
    "Amazon deforestation monitoring"
  ];

  return (
    <section className="py-20 bg-gradient-data">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Find Your Research Data
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Search by event type, location, or specific phenomenon to discover relevant datasets
          </p>

          {/* Main Search */}
          <div className="bg-card rounded-xl shadow-data p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search for datasets, events, or phenomena..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button variant="earth" size="lg" className="px-8">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>

            {/* Quick Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <Input placeholder="Location or coordinates" className="flex-1" />
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <Input placeholder="Date range" className="flex-1" />
              </div>
              <Button variant="outline" className="justify-start">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </div>

          {/* Event Types */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Browse by Event Type</h3>
            <div className="flex flex-wrap gap-3">
              {eventTypes.map((event) => (
                <Badge
                  key={event}
                  variant={selectedEvent === event ? "default" : "secondary"}
                  className="cursor-pointer px-4 py-2 text-sm hover:shadow-data transition-all duration-300"
                  onClick={() => setSelectedEvent(selectedEvent === event ? "" : event)}
                >
                  {event}
                </Badge>
              ))}
            </div>
          </div>

          {/* Popular Searches */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Popular Searches</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  className="text-left p-3 rounded-lg border border-border hover:bg-accent/50 hover:border-primary/30 transition-all duration-300"
                  onClick={() => setSearchQuery(search)}
                >
                  <Search className="w-4 h-4 inline mr-2 text-muted-foreground" />
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchInterface;