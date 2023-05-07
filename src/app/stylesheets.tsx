import { getCssText } from "configs/stitches.config";

export default function StyleSheet() {
  return (
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  );
}
