import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, Download, Eye, MapPin, Star, Database } from "lucide-react";

interface DatasetCardProps {
  title: string;
  description: string;
  relevanceScore: number;
  dataType: string;
  timeRange: string;
  location: string;
  fileSize: string;
  downloadCount: number;
  tags: string[];
  featured?: boolean;
}

const DatasetCard = ({
  title,
  description,
  relevanceScore,
  dataType,
  timeRange,
  location,
  fileSize,
  downloadCount,
  tags,
  featured = false
}: DatasetCardProps) => {
  return (
    <Card className={`transition-all duration-300 hover:shadow-glow ${featured ? 'ring-2 ring-primary/20 bg-gradient-data' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-semibold text-lg leading-tight mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-warning fill-current" />
              <span className="text-sm font-medium">{relevanceScore}%</span>
            </div>
            {featured && (
              <Badge variant="default" className="bg-gradient-cosmic text-xs">
                Featured
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="py-3">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Type:</span>
            <Badge variant="secondary" className="text-xs">{dataType}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Period:</span>
            <span className="text-xs">{timeRange}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Location:</span>
            <span className="text-xs">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Size:</span>
            <span className="text-xs">{fileSize}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-3 border-t">
        <div className="flex items-center justify-between w-full">
          <div className="text-xs text-muted-foreground">
            {downloadCount.toLocaleString()} downloads
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-1" />
              Preview
            </Button>
            <Button variant="default" size="sm">
              <Download className="w-4 h-4 mr-1" />
              Access
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DatasetCard;