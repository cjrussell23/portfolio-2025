import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { styles } from "../../styles";
import { ResumeSection } from "./ResumeSection";

export function ResumeEducation() {
  const educationStyles = StyleSheet.create({
    columns: {
      paddingTop: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 10,
    },
    Degree: {
      fontSize: 10,
      fontWeight: "bold",
      fontFamily: "Lato Bold",
    },
    University: {
      fontSize: 10,
      fontFamily: "Lato Italic",
      fontWeight: "light",
    },
    Achievement: {
      fontSize: 10,
      textAlign: "right",
    },
  });
  return (
    <ResumeSection title="Education" href="https://chjrussell.com/education">
      <View style={educationStyles.columns}>
        <View>
          <Text style={educationStyles.Degree}>
            Bachelor of Science, Applied Computer Science
          </Text>
          <Text style={educationStyles.University}>University of Winnipeg</Text>
        </View>
        <View style={educationStyles.columns}>
          <View>
            <Text style={educationStyles.Achievement}>Major GPA: 4.2</Text>
            <Text style={educationStyles.Achievement}>Deans Honour List</Text>
          </View>
          <View>
            <Text style={styles.date}>Sep 2020 - </Text>
            <Text style={styles.date}>Apr 2022</Text>
          </View>
        </View>
      </View>
    </ResumeSection>
  );
}
