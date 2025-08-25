import DatasetCard from "./DatasetCard";

const DatasetGrid = () => {
  const mockDatasets = [
    {
      title: "MODIS Land Surface Temperature - Mount Vesuvius",
      description: "High-resolution thermal data captured during the 2021 volcanic activity period. Includes daily temperature measurements with 1km spatial resolution.",
      relevanceScore: 96,
      dataType: "Thermal",
      timeRange: "2021-2023",
      location: "Mount Vesuvius, Italy",
      fileSize: "2.3 GB",
      downloadCount: 1547,
      tags: ["thermal", "volcano", "MODIS", "land-surface", "italy"],
      featured: true
    },
    {
      title: "VIIRS Active Fire Detection - California",
      description: "Real-time fire detection data from VIIRS sensor covering major California wildfire events. Includes fire radiative power and confidence levels.",
      relevanceScore: 94,
      dataType: "Fire Detection",
      timeRange: "2020-2024",
      location: "California, USA",
      fileSize: "1.8 GB",
      downloadCount: 2103,
      tags: ["fire", "VIIRS", "california", "wildfire", "detection"]
    },
    {
      title: "ASTER Digital Elevation Model - Pacific Ring of Fire",
      description: "Global digital elevation model covering volcanic regions in the Pacific Ring of Fire. 30-meter spatial resolution for detailed topographic analysis.",
      relevanceScore: 89,
      dataType: "Elevation",
      timeRange: "2000-2023",
      location: "Pacific Rim",
      fileSize: "5.1 GB",
      downloadCount: 892,
      tags: ["elevation", "ASTER", "DEM", "volcano", "pacific"]
    },
    {
      title: "MOPITT Carbon Monoxide - Amazon Basin",
      description: "Atmospheric carbon monoxide measurements over the Amazon region during fire season. Crucial for understanding fire impact on air quality.",
      relevanceScore: 87,
      dataType: "Atmospheric",
      timeRange: "2019-2024",
      location: "Amazon Basin",
      fileSize: "3.7 GB",
      downloadCount: 756,
      tags: ["carbon-monoxide", "MOPITT", "amazon", "atmospheric", "pollution"]
    },
    {
      title: "Landsat 8 Multispectral - Hurricane Harvey Impact",
      description: "Before and after satellite imagery showing the devastating impact of Hurricane Harvey on Houston and surrounding areas.",
      relevanceScore: 85,
      dataType: "Optical",
      timeRange: "2017",
      location: "Texas, USA",
      fileSize: "4.2 GB",
      downloadCount: 1289,
      tags: ["landsat", "hurricane", "flood", "optical", "texas"]
    },
    {
      title: "GRACE Water Storage - California Drought",
      description: "Groundwater storage changes during California's severe drought periods. Monthly data showing water depletion patterns across the state.",
      relevanceScore: 82,
      dataType: "Hydrological",
      timeRange: "2011-2017",
      location: "California, USA",
      fileSize: "890 MB",
      downloadCount: 634,
      tags: ["GRACE", "water", "drought", "groundwater", "california"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Recommended Datasets</h2>
            <p className="text-muted-foreground">
              Curated datasets based on your search criteria and research interests
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {mockDatasets.length} of 2,847 results
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDatasets.map((dataset, index) => (
            <DatasetCard key={index} {...dataset} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary-glow font-medium">
            Load More Datasets →
          </button>
        </div>
      </div>
    </section>
  );
};

export default DatasetGrid;