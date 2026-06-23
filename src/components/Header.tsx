import { Stack, Title, Text, Group, NavLink, Flex, Divider } from "@mantine/core";
import "@mantine/core/styles.css";
import { RowsIcon, ChartLineIcon, ArticleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import {Link} from "react-router-dom"

export function Header() {
  const  [active, setActive] = useState(1)
  return (
    <Flex justify="space-between" pt="md" pb={15}
    style={{
      borderBottom: "1px solid #c8cad3"
    }}
    >
      <Stack gap={"0"}>
        <Title order={2} fz={29} fw={600} >Аэропорт Пулково</Title>
        <Text size="xs">Информационная система</Text>
      </Stack>
      <Group>
        <NavLink
          w={"auto"}
          bdrs={5}
          // href="#required-for-focus"
          label="Онлайн табло"
          description="Прибытие, вылет"
          leftSection={<RowsIcon size={24} />}
          active = {active==1}
          onClick={()=>setActive(1)}
          component={Link}
          to = "/schedule"
          
        />
        <NavLink
          w={"auto"}
          bdrs={5}
          // href="#required-for-focus"
          label="Статистика"
          description="Графики, анализ"
          leftSection={<ChartLineIcon size={24} />}
          active = {active==2}
          onClick={()=>setActive(2)}
          component={Link}
          to = "/statistic"
        />
        <NavLink
          w={"auto"}
          bdrs={5}
          // href="#required-for-focus"
          label="О проекте"
          description="Подробнее о проекте"
          leftSection={<ArticleIcon size={24} />}
          active = {active==3}
          onClick={()=>setActive(3)}
          component={Link}
          to = "/about"
        />
      </Group>
       
    </Flex>
   
  );
}
