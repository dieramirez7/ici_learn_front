import { Search2Icon } from '@chakra-ui/icons';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import TeacherContext from '../../context/TeacherContext';

const Students = () => {
  const teacherContext = useContext(TeacherContext);
  const [students, setStudents] = useState(
    teacherContext.dashboardInfo.usuarios
  );

  const handleSearch = (e) => {
    const search = e.target.value;
    const filteredStudents = teacherContext.dashboardInfo.usuarios.filter(
      (student) => {
        return (
          student.nombre.toLowerCase().includes(search.toLowerCase()) ||
          student.apellidos.toLowerCase().includes(search.toLowerCase())
        );
      }
    );
    setStudents(filteredStudents);
  };

  return (
    <Flex justifyContent='center' pt='80px'>
      <VStack
        spacing={5}
        w={['100%', '90%', '50%']}
        px={[5, 10, 10]}
        py={5}
        borderRadius={15}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Search2Icon color='gray.300' />}
          />
          <Input
            placeholder='Buscar alumnos'
            onChange={handleSearch}
            variant='filled'
            bgColor='whiteAlpha.700'
          />
        </InputGroup>
        <Table
          variant='striped'
          colorScheme='blackAlpha'
          bgColor='whiteAlpha.700'
        >
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Nivel</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((student) => {
              return (
                <Tr key={student.email}>
                  <Td>
                    {student.nombre} {student.apellidos}
                  </Td>
                  <Td>{student.nivel}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </VStack>
    </Flex>
  );
};

export default Students;
