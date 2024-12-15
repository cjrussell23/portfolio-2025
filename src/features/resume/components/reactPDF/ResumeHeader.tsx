import {
  Circle,
  G,
  Line,
  Link,
  Path,
  Polygon,
  Polyline,
  Rect,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";

import { socials } from "@/lib/content/socials";

type Child =
  | {
      type: "path";
      key: string;
      props: {
        d: string;
        children: Child[];
      };
    }
  | {
      type: "circle";
      key: string;
      props: {
        cx: string;
        cy: string;
        r: string;
      };
    }
  | {
      type: "g";
      key: string;
      props: {
        children: Child[];
      };
    }
  | {
      type: "line";
      key: string;
      props: {
        x1: string;
        y1: string;
        x2: string;
        y2: string;
      };
    }
  | {
      type: "polygon";
      key: string;
      props: {
        points: string;
      };
    }
  | {
      type: "polyline";
      key: string;
      props: {
        points: string;
      };
    }
  | {
      type: "rect";
      key: string;
      props: {
        x: string;
        y: string;
        width: string;
        height: string;
      };
    };

type SVG = {
  props: {
    attr: {
      viewBox: string;
    };
    children: Child[];
  };
};

function SVGChild(child: Child) {
  switch (child.type) {
    case "circle":
      return <Circle key={child.key} {...child.props} />;
    case "g":
      return (
        <G key={child.key}>
          {child.props.children.map((grandchild) => {
            return SVGChild(grandchild);
          })}
        </G>
      );
    case "line":
      return <Line key={child.key} {...child.props} />;
    case "path":
      return <Path key={child.key} {...child.props} />;
    case "polygon":
      return <Polygon key={child.key} {...child.props} />;
    case "polyline":
      return <Polyline key={child.key} {...child.props} />;
    case "rect":
      return <Rect key={child.key} {...child.props} />;
    default:
      return null;
  }
}

function SVGRenderer(svg: SVG) {
  return (
    <Svg viewBox={svg.props.attr.viewBox} style={{ width: 20, height: 20 }}>
      {svg.props.children.map((child) => {
        return SVGChild(child);
      })}
    </Svg>
  );
}

export function ResumeHeader() {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "#252929",
        color: "#E4E4E4",
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 10,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginBottom: 10,
          fontWeight: "bold",
        }}
      >
        Charles Russell
      </Text>
      <Text
        style={{
          fontSize: 14,
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Web Developer
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "nowrap",
          gap: 5,
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 10,
          borderTop: "1px solid #E4E4E4",
          width: "100%",
        }}
      >
        {socials.map((social) => {
          const icon = social.icon();
          return (
            <Link
              style={{
                fontSize: 10,
                color: "#fff",
                textDecoration: "none",
              }}
              src={social.href}
              key={social.title}
            >
              <View
                key={social.title}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SVGRenderer {...icon} />
                <Text>{social.title}</Text>
              </View>
            </Link>
          );
        })}
      </View>
    </View>
  );
}
