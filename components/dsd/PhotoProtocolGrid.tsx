import { Camera, Upload } from 'lucide-react';
import { statusClass } from '@/lib/utils';
import { PhotoProtocolItem } from '@/types/dsd';

export function PhotoProtocolGrid({ photos }: { photos: PhotoProtocolItem[] }) {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{photos.map((photo) => <article key={photo.id} className="premium-card overflow-hidden p-4"><div className="grid h-36 place-items-center rounded-[24px] border border-dashed border-champagne/35 bg-gradient-to-br from-white to-ivory"><Camera className="text-gold" size={34}/></div><div className="mt-4 flex items-start justify-between gap-3"><div><h3 className="font-semibold">{photo.title}</h3><p className="text-sm text-taupe">{photo.angle}</p></div><span className={`status-pill ${statusClass(photo.status)}`}>{photo.status}</span></div><p className="mt-3 text-sm text-taupe">{photo.checklist}</p><button className="ghost-button mt-4 inline-flex items-center gap-2"><Upload size={15}/>Upload</button></article>)}</div>;
}
