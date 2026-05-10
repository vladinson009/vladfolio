import { expect, it } from 'vitest';

export type ServiceItem = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export function testValidLength(
  getItems: () => ServiceItem[],
  requiredLength: number,
) {
  it(`Happy path => length must be ${requiredLength}`, () => {
    expect(getItems().length).toBe(requiredLength);
  });
}

export function testRequiredProperties(
  getItems: () => ServiceItem[],
  requiredProps: string[],
) {
  it('has all required properties', () => {
    const items = getItems();
    expect(items.length).toBeGreaterThan(0);
    items.forEach((item) => {
      requiredProps.forEach((prop) => {
        expect(item).toHaveProperty(prop);
      });
    });
  });
}

export function testUniqueIds(getItems: () => ServiceItem[]) {
  const items = getItems();
  it('has unique IDs', () => {
    const ids = items.map((item) => item.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });
}

export function testValidUrls(getItems: () => ServiceItem[], urlFields: string[]) {
  const items = getItems();
  it('has valid URLs', () => {
    items.forEach((item) => {
      urlFields.forEach((field) => {
        expect(item[field]).toMatch(/^https?:\/\//);
      });
    });
  });
}
export function testIsArray(getItems: () => ServiceItem[], unitName: string) {
  const items = getItems();
  it(`return an array of ${unitName}`, () => {
    expect(Array.isArray(items)).toBe(true);
  });
}

export function testArrayProperty(getItems: () => ServiceItem[], property: string) {
  const items = getItems();
  it(`each item has non-empty ${property} array`, () => {
    items.forEach((item) => {
      expect(Array.isArray(item[property])).toBe(true);
      expect(item[property].length).toBeGreaterThan(0);
    });
  });
}

export function testDescendingIdSort(getItems: () => ServiceItem[]) {
  const items = getItems();
  it('sorted by descending ID', () => {
    for (let i = 0; i < items.length - 1; i++) {
      const current = Number(items[i].id);
      const next = Number(items[i + 1].id);
      expect(current).toBeGreaterThan(next);
    }
  });
}

export function testNonEmptyStringProperty(
  getItems: () => ServiceItem[],
  property: string,
) {
  const items = getItems();
  it(`all items have non-empty ${property}`, () => {
    items.forEach((item) => {
      expect(item[property]).toBeTruthy();
      expect(item[property].length).toBeGreaterThan(0);
    });
  });
}
