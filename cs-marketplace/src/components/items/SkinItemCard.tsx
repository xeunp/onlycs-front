import Image from 'next/image';
import Link from 'next/link';
import { SkinItem } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { getRarityBadgeVariant, getQualityBadgeVariant } from '@/data/mockData';
import { ShoppingCart, Eye, ExternalLink } from 'lucide-react';

interface SkinItemCardProps {
  item: SkinItem;
  variant?: 'default' | 'compact' | 'detailed';
}

export function SkinItemCard({ item }: SkinItemCardProps) {
  const rarityVariant = getRarityBadgeVariant(item.rarity);
  const qualityVariant = getQualityBadgeVariant(item.quality);

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cs-blue/20 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <Image
          src={item.images.preview}
          alt={item.fullName}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay badges */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          <Badge variant={rarityVariant as "consumer" | "industrial" | "milspec" | "restricted" | "classified" | "covert" | "contraband"} className="text-xs">
            {item.rarity}
          </Badge>
          <Badge variant={qualityVariant as "fn" | "mw" | "ft" | "ww" | "bs"} className="text-xs">
            {item.quality}
          </Badge>
          {item.isStatTrak && (
            <Badge variant="destructive" className="text-xs">
              StatTrak™
            </Badge>
          )}
          {item.isSouvenir && (
            <Badge variant="outline" className="text-xs bg-yellow-100 text-yellow-800">
              Souvenir
            </Badge>
          )}
        </div>

        {/* Availability indicator */}
        <div className="absolute top-2 right-2">
          <div className={`w-3 h-3 rounded-full ${
            item.availability === 'InStock' ? 'bg-green-500' :
            item.availability === 'Limited' ? 'bg-yellow-500' : 'bg-red-500'
          }`} />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
            <Eye className="w-4 h-4 mr-1" />
            View
          </Button>
          {item.is3DAvailable && (
            <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              3D
            </Button>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 line-clamp-1">
              {item.weapon}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
              {item.skinName}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-cs-blue">
              {formatPrice(item.price.current, item.price.currency)}
            </div>
            {item.price.low && item.price.high && (
              <div className="text-xs text-gray-500">
                {formatPrice(item.price.low)} - {formatPrice(item.price.high)}
              </div>
            )}
          </div>

          <div className="text-xs text-gray-500">
            {item.collection}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          size="sm" 
          className="flex-1" 
          variant="cs"
          disabled={item.availability === 'OutOfStock'}
        >
          <ShoppingCart className="w-4 h-4 mr-1" />
          {item.availability === 'OutOfStock' ? 'Out of Stock' : 'Add to Cart'}
        </Button>
        
        <Link href={`/items/${item.slug}`} passHref>
          <Button size="sm" variant="outline">
            <Eye className="w-4 h-4" />
          </Button>
        </Link>
        
        <a href={item.steamMarketUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm" variant="outline">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
