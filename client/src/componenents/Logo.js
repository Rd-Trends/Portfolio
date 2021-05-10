import React from "react";
import { motion } from "framer-motion";

function Icon() {
  const svgVariant = {
    hidden: { rotate: "0deg" },
    visible: { rotate: "0deg", transition: { duration: 1 } },
  };

  const pathVariant = {
    hidden: { pathLength: 0, fillOpacity: 0 },
    visible: {
      pathLength: 1,
      fillOpacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg1468"
      width="80"
      height="50"
      version="1.1"
      viewBox="0 0 52.917 37.042"
      variants={svgVariant}
      initial="hidden"
      animate="visible"
      style={{ marginLeft: "-10px" }}
    >
      <g
        id="layer1"
        fill="#007cc7"
        fillOpacity="1"
        fillwidth="1"
        stroke="#007cc7"
        strokeOpacity="1"
        strokeWidth="1"
        fontFamily="GothicE"
        fontSize="34.791"
        fontStretch="normal"
        fontStyle="normal"
        fontVariant="normal"
        fontWeight="normal"
      >
        <motion.path
          d="M31.615 31.136l-3.62 3.616-3.106-3.137-2.85-8.59-2.63-2.618-2.513 1.279q-.535 1.178-1.366 2.817L13.493 26.5V12.755l.494-.98.97-1.997.04-.04q.078-.06.197-.18.119-.12.297-.28l.97-.979 2.868-1.918q.198-.14.554-.38.356-.259.87-.599l.772-.4q.732-.379 2.216-1.118l3.086 1.558 1.504 3.017v4.476q-.277.6-.653 1.338-.356.74-.811 1.639l-1.504 1.518q-.237.1-.672.32l-1.069.54-3.403 1.717.772.36 1.543.78q.08.1.455.499l1.128 1.139q.218.42.534.999.317.559.752 1.258l2.849 4.775q.257.28.574.6l.712.719zM16.895 3.065L12.524 7.44H8.072l-2.77-1.398L.81 8.299l4.372-4.375h4.471l2.75 1.399zM9.893 24.383q-.277.64-.653 1.378-.356.74-.811 1.599-.396.4-.91.899L6.41 29.378v-9.05H4.016l-1.86 1.877V18.45l1.622-1.638H6.41v-1.18q.277-.638.633-1.378.356-.739.811-1.618.396-.4.91-.88.515-.499 1.128-1.118zm11.633 6.953l-3.363 3.376-3.007-1.498H11.02q-.515.14-2.375.62-1.84.459-5.084 1.258l3.897-2.617q.258-.18.732-.5.495-.34 1.207-.8l2.928-.978q.04-.02.218-.08.178-.08.495-.24.376-.18.732-.18h2.928zm3.324-17.143v-4.135L23.504 7.36 20.95 6.042l-3.976 2.677v12.187q.534-.22 1.82-.979 1.286-.779 3.324-2.097l1.385-.9z"
          style={{ lineHeight: "1.25", InkscapeFontSpecification: "GothicE" }}
          id="path1474"
          strokeWidth="1.018"
          variants={pathVariant}
        />
        <motion.path
          d="M47.94 31.136h-2.724q-.104.04-.414.14-.293.1-.793.3l-2.43.938q-.448.28-1.12.66-.656.38-1.535.879l-1.327-1.539q-.914-.499-2.379-1.378h-3.603l3.396-1.978V16.231l1.31-.48 2.569-.998 2.085-1.219-6.136-7.113 4.31-3.316 1.344 4.615 7.446 8.631zm-3.034-.58V18.03l-3.465-3.995-3.396 2.617v12.507q.448.24 1.034.58.604.339 1.328.779l1.137 1.358z"
          style={{ lineHeight: "1.25", InkscapeFontSpecification: "GothicE" }}
          id="path1476"
          strokeWidth="0.95"
          variants={pathVariant}
        />
      </g>
    </motion.svg>
  );
}

export default Icon;
