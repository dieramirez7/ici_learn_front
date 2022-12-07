import {
  Box,
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useContext, useState, useEffect } from 'react';
import PlacementTestContext from '../../context/PlacementTestContext';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import shuffleArray from '../../utils/shuffleArray';
import Card from '../../components/layout/Card';

const PlacementTest = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const placementTestContext = useContext(PlacementTestContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setCurrentAnswers(
      shuffleArray(placementTestContext.questions[questionIndex].answers)
    );
  }, []);

  const handleAnswer = () => {
    handleProgressBar();

    placementTestContext.addAnswer(selectedAnswer.correct);
    if (questionIndex === placementTestContext.questions.length - 1) {
      onOpen();
      return;
    }
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswer(null);
    setCurrentAnswers(
      shuffleArray(placementTestContext.questions[questionIndex + 1].answers)
    );
  };

  const handleProgressBar = () => {
    const oldProgress = progress;
    const newProgress =
      (questionIndex + 1) * (100 / placementTestContext.questions.length);
    var auxProgress = oldProgress;
    const interval = setInterval(() => {
      if (auxProgress >= newProgress) {
        clearInterval(interval);
        return;
      }
      setProgress((oldProgressState) => oldProgressState + 1);
      auxProgress++;
    }, 10);
    if (progress === newProgress) {
      clearInterval(interval);
    }
  };

  const handleSubmitTest = () => {};

  return (
    <>
      <Card autoHeight={true}>
        <Progress
          position='absolute'
          top={0}
          left={0}
          w='100%'
          value={progress}
          colorScheme='blackAlpha'
          display={['none', 'block', 'block']}
        />
        <Text position='absolute' top={5} right={5} fontWeight='bold'>
          Pregunta {questionIndex + 1} de{' '}
          {placementTestContext.questions.length}
        </Text>
        {/* <HStack> */}
        <Text fontSize='2xl' fontWeight='bold'>
          {placementTestContext.questions[questionIndex].question}
        </Text>
        {/* </HStack> */}
        {currentAnswers.map((ans, i) => {
          return (
            <Box
              onClick={() => {
                setSelectedAnswer(ans);
              }}
              key={ans.answer}
              border={
                selectedAnswer === ans
                  ? '2px solid #828282'
                  : '1px solid #b2b2b2'
              }
              borderRadius={15}
              p={4}
              bgColor='white'
              w='100%'
              _hover={{
                cursor: 'pointer',
                shadow: 'md',
              }}
            >
              <Flex justifyContent='space-between' align='center'>
                <Text>{ans.answer}</Text>
                {selectedAnswer === ans ? (
                  <Icon
                    as={AiOutlineCheckCircle}
                    color={'green.500'}
                    w={6}
                    h={6}
                  />
                ) : (
                  <Box
                    border='1px solid #b2b2b2'
                    borderRadius={30}
                    w={6}
                    h={6}
                  ></Box>
                )}
              </Flex>
            </Box>
          );
        })}
        <Button
          w='100%'
          colorScheme='blackAlpha'
          size='lg'
          disabled={selectedAnswer === null}
          onClick={() => {
            handleAnswer();
          }}
        >
          Siguiente
        </Button>
      </Card>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resultados examen de diagnóstico</ModalHeader>
          <ModalBody>
            <Center>
              <VStack>
                <CircularProgress
                  size={100}
                  color='gray'
                  value={
                    (placementTestContext.answers.filter((a) => a).length /
                      placementTestContext.questions.length) *
                    100
                  }
                >
                  <CircularProgressLabel>
                    {placementTestContext.answers.filter((a) => a).length} /{' '}
                    {placementTestContext.questions.length}
                  </CircularProgressLabel>
                </CircularProgress>
                <Text fontSize='2xl'>Puntuación</Text>
                <Text fontSize='3xl'>Colocado en el nivel {'{nivel}'}</Text>
              </VStack>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button w='100%' colorScheme='blackAlpha'>
              Continuar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlacementTest;
