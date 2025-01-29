"use client";
import Link from "next/link";
import { ListGroup, Stack } from "react-bootstrap";
import { Location } from "./page";

export const LocationList = ({ locations }: { locations: Location[] }) => {
  const renderLocation = (
    location: Location | string,
    parentPath = "",
    depth = 0
  ) => {
    if (typeof location === "string") {
      const path = `${parentPath}/${location
        .toLowerCase()
        .replace(/\s+/g, "-")}`;
      return (
        <ListGroup.Item
          key={location}
          className={`location-item child-item depth-${depth}`}
        >
          <Link
            href={path}
            className="text-decoration-none text-dark location-link d-block w-100"
          >
            {location}
          </Link>
        </ListGroup.Item>
      );
    }

    return Object.entries(location).map(([key, value]) => (
      <div key={key} className={`location-card depth-${depth}`}>
        <ListGroup.Item className="parent-item">
          <Link
            href={`/${key.toLowerCase()}`}
            className="text-decoration-none text-dark location-link fs-5 d-block w-100"
          >
            {key}
          </Link>
        </ListGroup.Item>
        <ListGroup className="nested-list">
          {Array.isArray(value) &&
            value.map((item, index) => (
              <Stack key={index}>
                {renderLocation(item as Location, `/${key}`, depth + 1)}
              </Stack>
            ))}
        </ListGroup>
      </div>
    ));
  };

  return (
    <ListGroup className="location-container">
      {locations.map((location: Location) => renderLocation(location, "", 0))}

      <style>{`
        .location-container {
          margin-top: 2rem;
        }

        .location-card {
          margin-bottom: 1.5rem;
        }
        .location-card.depth-0{
          padding-bottom: 1rem;
          border-bottom: 1px solid #1e3b55;
        }

        .parent-item {
          border: none;
          background: transparent;
          padding: 1rem;
        }

        .depth-0 > .parent-item {
          font-weight: bolder;
        }

        .child-item {
          border: none;
          background-color: transparent;
          padding: 0.5rem 1rem;
        }

        .location-link {
          position: relative;
          padding: 0.5rem 0;
          transition: transform 0.25s ease-in-out;
        }

        /* Depth-based indentation */
        .depth-0 {
          margin-right: 0;
        }

        .depth-1 {
          margin-right: 2rem;
        }

        .depth-2 {
          margin-right: 4rem;
        }

        .depth-3 {
          margin-right: 6rem;
        }

        /* Hover effects */
        .location-link:hover {
          transform: translateX(-10px);
        }

        .location-link:hover {
          color: #0d6efd !important;
        }

        /* Visual indication of hierarchy */
        .nested-list {
          margin-left: 0.6rem;
          padding-left: 0.6rem;

          --bs-border-radius: 0;

          & .location-item{border-right: 2px solid #1e3b55;}
        }

        @media (prefers-reduced-motion: reduce) {
          .location-card,
          .child-item {
            transition: none;
          }
        }
      `}</style>
    </ListGroup>
  );
};
