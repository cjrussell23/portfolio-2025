import { Link, Text, View } from "@react-pdf/renderer";

import { jobs } from "@/lib/content/jobs";
import { styles } from "../../styles";
import { ResumeSection } from "./ResumeSection";

export function ResumeJobs() {
  return (
    <ResumeSection title="Work Experience" href="https://chjrussell.com/work">
      <View style={{ flexDirection: "column", gap: 10, paddingTop: 10 }}>
        {Object.values(jobs).map((job) => (
          <View
            key={job.title}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <View style={{ flexDirection: "column", gap: 5, width: "90%" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 10,
                  width: "100%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <Text style={styles.bold}>{job.title}</Text>
                  <Text style={styles.text}>-</Text>
                  <Link
                    style={{
                      fontSize: 10,
                      color: "#252929",
                      textDecoration: "none",
                    }}
                    href={job.website}
                  >
                    {job.company}
                  </Link>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    color: "#252929",
                    fontFamily: "Lato Italic",
                    textDecoration: "none",
                  }}
                >
                  {job.location}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  gap: 2,
                  padding: 5,
                }}
              >
                {job.points.map((bullet, index) => (
                  <View style={{ flexDirection: "row", gap: 2 }} key={index}>
                    <Text style={styles.text}>•</Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontFamily: "Lato",
                      }}
                    >
                      {bullet.content}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                gap: 5,
                width: "10%",
                alignItems: "flex-end",
              }}
            >
              <Text style={styles.date}>
                {job.date.start.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}{" "}
                -
              </Text>
              <Text style={styles.date}>
                {job.date.end
                  ? job.date.end.toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })
                  : "Present"}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ResumeSection>
  );
}
