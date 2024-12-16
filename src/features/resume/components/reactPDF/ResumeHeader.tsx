import { Link, Text, View } from "@react-pdf/renderer";

import { socials } from "@/lib/content/socials";

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
          if (!social.resume) {
            return null;
          }
          return (
            <Link
              style={{
                fontSize: 10,
                color: "#fff",
                textDecoration: "none",
              }}
              src={social.href}
              key={social.resume.title}
            >
              <View
                key={social.resume.title}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <social.resume.icon />
                <Text>{social.resume.title}</Text>
              </View>
            </Link>
          );
        })}
      </View>
    </View>
  );
}
