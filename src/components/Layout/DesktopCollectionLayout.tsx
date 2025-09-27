import Accordion from "../accordion/Accordion";
import { FilterSidebar, ProductCard, ProductSkeleton } from "../common";
import SortDropdown from "../filter/SortDropdown";

export function DesktopCollectionLayout({ collection }: { collection: any }) {
    return <div className="container mx-auto py-8 text-[var(--color-text)]">
        <Accordion>
            Nước hoa từ những ngày đầu đã được tạo ra là để phục vụ cho phái đẹp, vì thế dường như trong thế giới mùi hương, những sự lựa chọn cho nữ giới là phong phú và nhiều màu sắc hơn cả. Là do vậy, namperfume luôn muốn đem đến cho các quý cô xinh đẹp những lựa chọn tuyệt vời, từ quyến rũ, sang trọng, quyền lực đến nhẹ nhàng, ngây thơ, và không thể thiếu một chút gợi cảm lả lơi, ngả ngốn...
        </Accordion>
        <div className="flex items-end justify-between">
            <div className="flex items-end gap-8">
                <h2 className="text-2xl font-semibold">Nước hoa nữ</h2>
                <span className="text-sm">550 sản phẩm</span>
            </div>
            <div>
                <SortDropdown onChange={() => { }} />
            </div>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-8">
            <div className="col-span-1">
                <FilterSidebar />
            </div>
            <div className="col-span-4">
                <div className="grid grid-cols-4 gap-4">
                    {collection.length === 0
                        ? Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)
                        : collection.map((item: any, index: number) => (
                            <ProductCard key={`${item.id}-${index}`} item={item} />
                        ))}
                </div>
            </div>
        </div>
    </div>;
}