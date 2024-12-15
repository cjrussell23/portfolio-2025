import { Link, StyleSheet, View } from "@react-pdf/renderer";

export function ResumeSection(props: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  const sectionStyles = StyleSheet.create({
    title: {
      fontSize: 14,
      borderBottom: "1px solid #252929",
      width: "100%",
      color: "#252929",
      textDecoration: "none",
      "&:hover": {
        color: "#252929",
        textDecoration: "underline",
      },
      fontFamily: "Lato Bold",
      fontWeight: "bold",
      paddingBottom: 2,
    },
    section: {},
  });
  return (
    <View style={sectionStyles.section}>
      <Link style={sectionStyles.title} src={props.href}>
        {props.title}
      </Link>
      <View>{props.children}</View>
    </View>
  );
}
