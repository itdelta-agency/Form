import { mount } from "@vue/test-utils";
import Main from "../components/Main.vue";

test("Full form complete", async () => {
  const wrapper = mount(Main);

  const firstName = wrapper.get("#firstName");
  const lastName = wrapper.get("#lastName");
  const nextBtn = wrapper.get("#nextStep");

  firstName.setValue("John");
  lastName.setValue("Wick");

  expect(firstName.element.value).toBe("John");
  expect(lastName.element.value).toBe("Wick");

  await nextBtn.trigger("click");
  const middleName = wrapper.get("#middleName");
  await middleName.setValue("Test");
  expect(middleName.element.value).toBe("Test");

  await nextBtn.trigger("click");
  const dateBirth = wrapper.get("#dateBirth");
  await dateBirth.setValue("2022-01-01");
  expect(dateBirth.element.value).toBe("2022-01-01");

  await nextBtn.trigger("click");

  expect(wrapper.get("#result").isVisible()).toBe(true);
});

test("Required fields only", async () => {
  const wrapper = mount(Main);

  const firstName = wrapper.get("#firstName");
  const lastName = wrapper.get("#lastName");
  const nextBtn = wrapper.get("#nextStep");

  firstName.setValue("John");
  lastName.setValue("Wick");

  expect(firstName.element.value).toBe("John");
  expect(lastName.element.value).toBe("Wick");

  await nextBtn.trigger("click");
  await nextBtn.trigger("click");
  
  const dateBirth = wrapper.get("#dateBirth");
  await dateBirth.setValue("2022-01-01");
  expect(dateBirth.element.value).toBe("2022-01-01");
  
  await nextBtn.trigger("click");
  expect(wrapper.get("#result").isVisible()).toBe(true);
});
