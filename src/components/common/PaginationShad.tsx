import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
}
const PaginationShad = ({
  currentPage,
  totalPages,
  handlePageChange,
}: Props) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="text-xs md:text-base"
            href="#"
            onClick={() => {
              if (currentPage > 1) handlePageChange(currentPage - 1);
            }}
          />
        </PaginationItem>
        {currentPage === totalPages && totalPages !== 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink className="text-xs md:text-base" href="#">
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            className="text-xs md:text-base"
            href="#"
            onClick={() => {
              if (currentPage < totalPages) handlePageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationShad;
