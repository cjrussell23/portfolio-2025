import { keywords } from "../../keywords";

import { Document, Font, Page, StyleSheet, View } from "@react-pdf/renderer";

import { styles } from "../../styles";
import { ResumeEducation } from "./ResumeEducation";
import { ResumeHeader } from "./ResumeHeader";
import { ResumeJobs } from "./ResumeJobs";
import { ResumeSkills } from "./ResumeSkills";

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato Italic",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

Font.registerHyphenationCallback((word) => {
  return [word];
});

export default function Resume() {
  const resumeStyles = StyleSheet.create({
    resume: {
      flexDirection: "column",
      paddingTop: 15,
      paddingHorizontal: 20,
      paddingBottom: 10,
      gap: 10,
    },
  });
  const props = {
    title: `Charles Russell Resume - ${new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}`,
    author: "Charles Russell",
    subject: "Web Developer",
    keywords: keywords.join(", "),
    creator: "Charles Russell",
    language: "en",
  };
  return (
    <Document {...props}>
      <Page size="A4" style={styles.page}>
        <ResumeHeader />
        <View style={resumeStyles.resume}>
          <ResumeEducation />
          <ResumeJobs />
          <ResumeSkills />
        </View>
      </Page>
    </Document>
  );
}
