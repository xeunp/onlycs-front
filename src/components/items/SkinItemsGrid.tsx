import { SkinItem } from '@/types';
import { SkinItemCard } from './SkinItemCard';

interface SkinItemsGridProps {
  items: SkinItem[];
  loading?: boolean;
  className?: string;
}

export function SkinItemsGrid({ items, loading = false, className = '' }: SkinItemsGridProps) {
  if (loading) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-[4/3] mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 dark:text-gray-400 text-lg mb-2">
          No items found
        </div>
        <div className="text-gray-400 dark:text-gray-500 text-sm">
          Try adjusting your search filters
        </div>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {items.map((item) => (
        <SkinItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
